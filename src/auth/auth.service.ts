import { Injectable } from '@nestjs/common';
import { RepositoryService } from '../repository/repository.service';

@Injectable()
export class AuthService {
  constructor(private repository: RepositoryService) {}

  signIn() {
    return 'I am singing in...';
  }

  signUp() {
    return 'I am signing up...';
  }
}
