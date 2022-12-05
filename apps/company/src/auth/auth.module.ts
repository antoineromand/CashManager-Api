import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { CompanyService } from '../company.service';
import { AuthModuleLib } from '@app/auth';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  imports: [AuthModuleLib]
})
export class AuthModule { }
