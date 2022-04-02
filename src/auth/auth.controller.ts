import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  //shorthand dependency injection
  constructor(private authService: AuthService) {}

  //auth/sign-in
  @Post('sign-in')
  signIn() {
    return this.authService.signIn();
  }
  //auth/sign-up
  @Post('sign-up')
  signUp() {
    return this.authService.signUp();
  }
}
