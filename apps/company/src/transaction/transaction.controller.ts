import { JwtAuthGuard } from '@app/auth';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { TransactionDTO } from '../dto/transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('private/api/company/transaction')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) { }
  @UseGuards(JwtAuthGuard)
  @Post()
  async createTransaction(@Body() transaction: TransactionDTO) {
    return this.transactionService.create(transaction);
  }
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async listTransactions(@Param('id') company: string) {
    return this.transactionService.getAllTransactions(company);
  }
}
