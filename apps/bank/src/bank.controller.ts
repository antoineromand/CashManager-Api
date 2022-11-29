import { Controller, Get, Param, Query } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { BankService } from './bank.service';

@Controller('private/api/bank')
export class BankController {

  constructor(private bankService: BankService) { }

  @Get()
  getBy(@Query('email') email: string) {
    console.log(email)
    return this.bankService.getByEmail(email);
  }

  @MessagePattern({ cmd: "ping" })
  ping(_: any) {
    return of("pong").pipe(delay(1000));
  }
}
