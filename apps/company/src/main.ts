import { NestFactory } from '@nestjs/core';
import { CompanyModule } from './company.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(CompanyModule);
  app.use(cookieParser());
  await app.listen(4001);

}
bootstrap();
