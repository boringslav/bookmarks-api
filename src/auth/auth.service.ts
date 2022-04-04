import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RepositoryService } from '../repository/repository.service';
import { AuthDTO } from './dto';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class AuthService {
  constructor(private repository: RepositoryService) {}

  async signIn(dto: AuthDTO) {
    const { email, password } = dto;
    const user = await this.repository.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new ForbiddenException('Invalid credentials!');

    const isValidPassword = await bcrypt.compare(password, user.hash);

    if (!isValidPassword) throw new ForbiddenException('Invalid credentials!');

    delete user.hash;
    return user;
  }

  async signUp(dto: AuthDTO) {
    const { email, password } = dto;
    const hash = await bcrypt.hash(password, 10);

    try {
      /**
       * @property data - includes all the properties we want to save in the db
       * @property select - includes all the properties/columns we want to retrieve from the db.
       * If we want to retrieve all properties/columns we don`t need the select property
       */
      const user = await this.repository.user.create({
        data: {
          email,
          hash,
        },
        select: {
          id: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return user;
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        /**
         * code P2002 - Unique constraint failed on the constraint (duplicate field)
         */
        if (err.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw err;
    }
  }
}
