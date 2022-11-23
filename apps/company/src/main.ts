import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { CompanyModule } from './company.module';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CompanyModule, {
    transport: Transport.TCP, options: {
      port: 4000,
      host: "127.0.0.1"
    }
  });
  await app.listen();
}
bootstrap();
