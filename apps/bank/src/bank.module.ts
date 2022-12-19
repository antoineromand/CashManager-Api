import { Module } from '@nestjs/common';
import { BankController } from './bank.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankService } from './bank.service';
import { entities_bank } from '@app/entities';


@Module({
  controllers: [BankController],
  imports: [ConfigModule.forRoot(),
  TypeOrmModule.forFeature(entities_bank),
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.COMPANY_DATABASE_HOST || 'localhost',
    port: parseInt(process.env.BANK_DATABASE_PORT),
    username: process.env.BANK_DATABASE_USERNAME,
    password: process.env.BANK_DATABASE_PASSWORD,
    database: process.env.BANK_DATABASE_NAME,
    entities: entities_bank,
    synchronize: true,
  }),
  ],
  providers: [BankService],
  exports: [BankService]
})
export class BankModule { }
