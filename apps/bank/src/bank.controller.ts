import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { BankService } from './bank.service';
import { TransactionDTO } from './dto/transaction.dto';

@Controller('private/api/bank')
export class BankController {

  constructor(private bankService: BankService) { }

  @Get()
  getBy(@Query('email') email: string) {
    return this.bankService.getByEmail(email);
  }

  @Post()
  createTransaction(@Body() transaction: TransactionDTO) {
    return this.bankService.create(transaction)
  }

  @MessagePattern({ cmd: "ping" })
  ping(_: any) {
    return of("pong").pipe(delay(1000));
  }
}
