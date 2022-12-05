import { AuthModuleLib } from '@app/auth';
import { Module } from '@nestjs/common';
import { BankModule } from 'apps/bank/src/bank.module';
import { AuthModule } from 'apps/company/src/auth/auth.module';
import { CompanyModule } from 'apps/company/src/company.module';

@Module({
  imports: [CompanyModule, BankModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
