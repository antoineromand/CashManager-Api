import { Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CompanyModule } from 'apps/company/src/company.module';
import { CompanyService } from 'apps/company/src/company.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

const options: JwtModuleOptions = {
  secret: process.env.SECRET_KEY,
  signOptions: { expiresIn: '24h' },
}

@Module({
  imports: [JwtModule.register(options), PassportModule],
  providers: [AuthService, CompanyService, JwtStrategy],
  exports: [AuthService, JwtModule]
})
export class AuthModuleLib { }
