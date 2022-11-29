import { Body, Controller, Param, Post } from '@nestjs/common';
import { TransactionDTO } from '../dto/transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('private/api/company/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(@Body() transaction: TransactionDTO) {
    return this.transactionService.create(transaction);
  }
}
