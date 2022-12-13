import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, ClientsModuleOptions, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const options = {
  port: 4000,
  host: "127.0.0.1"
};

@Module({
  imports: [
    ClientsModule.register([
      { name: 'BANK_SERVICE', transport: Transport.TCP, options: options },
      { name: 'COMPANY_SERVICE', transport: Transport.TCP, options: options }
    ]), ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
