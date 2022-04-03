import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RepositoryService } from '../repository/repository.service';
import { AuthDTO } from './dto';

@Injectable()
export class AuthService {
  constructor(private repository: RepositoryService) {}

  signIn() {
    return 'I am singing in...';
  }

  async signUp(dto: AuthDTO) {
    const { email, password } = dto;
    const hash = await bcrypt.hash(password, 10);

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
  }
}
