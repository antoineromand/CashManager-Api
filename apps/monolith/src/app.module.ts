import { Module } from '@nestjs/common';
import { AuthModule } from 'apps/auth/src/auth.module';
import { BankModule } from 'apps/bank/src/bank.module';
import { CompanyModule } from 'apps/company/src/company.module';

@Module({
  imports: [CompanyModule, BankModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
