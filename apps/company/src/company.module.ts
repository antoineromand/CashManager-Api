import { AuthModuleLib } from '@app/auth';
import { AuthModule } from './auth/auth.module';
import { entities_company } from '@app/entities/index';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyController } from './company.controller';
import { CompanyService } from './company.service';
import { ProductModule } from './product/product.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';

@Module({
  controllers: [CompanyController],
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.COMPANY_DATABASE_HOST,
    port: parseInt(process.env.COMPANY_DATABASE_PORT),
    username: process.env.COMPANY_DATABASE_USERNAME,
    password: process.env.COMPANY_DATABASE_PASSWORD,
    database: process.env.COMPANY_DATABASE_NAME,
    entities: entities_company,
    synchronize: true,
  }), ProductModule, TransactionModule, AuthModuleLib, AuthModule, UserModule],
  providers: [CompanyService],
  exports: [CompanyService]
})
export class CompanyModule { }
