import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { BankModule } from './bank.module';

async function bootstrap() {
  const app = await NestFactory.create(BankModule)
  app.use(cookieParser());
  await app.listen(4002);
}
bootstrap();
