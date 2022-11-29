import { Company, Transaction } from '@app/entities';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TransactionDTO } from '../dto/transaction.dto';

@Injectable()
export class TransactionService {
    async create(transaction: TransactionDTO) {
        if (!transaction.amount) throw new HttpException('There is no amount in the transaction !', HttpStatus.NOT_ACCEPTABLE)
        if (!transaction.client_email) throw new HttpException('There is no client in the transaction !', HttpStatus.NOT_ACCEPTABLE)
        const company = await Company.findOne({ where: { id: transaction.company } });
        if (company === null) throw new HttpException('Cannot find the company !', HttpStatus.NOT_FOUND)
        const $transaction = await Transaction.createQueryBuilder('transaction').insert().into(Transaction).values([{ client_email: transaction.client_email, amount: transaction.amount, company: company }]).execute();
        return $transaction;
    }
}
