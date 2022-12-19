import { DashboardModule } from "@app/dashboard";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { BankModule } from "apps/bank/src/bank.module";
import { AuthModule } from "apps/company/src/auth/auth.module";
import { CompanyModule } from "apps/company/src/company.module";

@Module({
  imports: [
    CompanyModule,
    BankModule,
    AuthModule,
    ConfigModule.forRoot(),
    DashboardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
