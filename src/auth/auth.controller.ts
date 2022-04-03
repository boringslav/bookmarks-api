import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

@Controller('auth')
export class AuthController {
  //shorthand dependency injection
  constructor(private authService: AuthService) {}

  @Post('sign-in')
  signIn(@Body() dto: AuthDTO) {
    return this.authService.signIn();
  }

  @Post('sign-up')
  signUp(@Body() dto: AuthDTO) {
    return this.authService.signUp(dto);
  }
}
