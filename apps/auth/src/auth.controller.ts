import { Body, Controller, Get, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';

interface LoginDto {
  email: string,
  password: string,
}

@Controller('/private/api/auth/login')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  async signUp(@Res({ passthrough: true }) response: Response, @Body() credentials: LoginDto) {
    try {
      const result = await this.authService.validateUser(credentials.email, credentials.password)
      response.cookie('access-token', result.token, { httpOnly: true });
      response.status(200).send(result.user);
    } catch (e) {
      throw new HttpException('Error in login !', HttpStatus.NOT_FOUND)
    }
  }
}
