import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signIn() {
    return 'I am singing in...';
  }

  signUp() {
    return 'I am signing up...';
  }
}
