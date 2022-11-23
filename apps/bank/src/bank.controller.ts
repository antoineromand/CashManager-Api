import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { BankService } from './bank.service';

@Controller('private/api/bank')
export class BankController {

  constructor(private bankService: BankService) { }

  @Get()
  list() {
    return this.bankService.list();
  }

  @MessagePattern({ cmd: "ping" })
  ping(_: any) {
    return of("pong").pipe(delay(1000));
  }
}
