import { Module } from '@nestjs/common';
import { BankModule } from 'apps/bank/src/bank.module';
import { CompanyModule } from 'apps/company/src/company.module';

@Module({
  imports: [CompanyModule, BankModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
