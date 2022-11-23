import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'apps/monolith/src/app.module';
import { BankModule } from './bank.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(BankModule, {
    transport: Transport.TCP, options: {
      port: 4000,
      host: '127.0.0.1'
    }
  })
  await app.listen();
}
bootstrap();
