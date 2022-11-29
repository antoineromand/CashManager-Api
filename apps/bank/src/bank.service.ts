import { BankAccount, BankTransaction } from '@app/entities';
import { TransactionState } from '@app/utils';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TransactionDTO } from './dto/transaction.dto';

@Injectable()
export class BankService {

  async getByEmail(email: string): Promise<BankAccount> {
    let res = null;
    const account = await BankAccount.findOne({ where: { email: email } });
    if (account === null) {
      const $account = await BankAccount.createQueryBuilder().insert().into(BankAccount).values({ email: email }).execute();
      res = await BankAccount.findOne({ where: { id: $account.identifiers[0].id } })
      return res;
    } else {
      return account;
    }
  }

  async create(transaction: TransactionDTO) {
    const debtor = await BankAccount.findOne({ where: { email: transaction.debtor } });
    const creditor = await BankAccount.findOne({ where: { email: transaction.creditor } });
    if (debtor === null) throw new HttpException('Debtor not found', HttpStatus.NOT_FOUND);
    if (creditor === null) throw new HttpException('Creditor not found', HttpStatus.NOT_FOUND);
    if (!transaction.amount) throw new HttpException('You must precised an amount !', HttpStatus.NOT_ACCEPTABLE);
    if (debtor.balance >= transaction.amount) {
      debtor.balance -= transaction.amount;
      await debtor.save();
      creditor.balance += transaction.amount;
      await creditor.save();
      return { transactionState: TransactionState.SUCCEED };
    } else {
      await BankTransaction.createQueryBuilder().insert().into(BankTransaction).values({ debtor: debtor, creditor: creditor, amount: transaction.amount, transactionState: TransactionState.REFUSED }).execute();
      return { transactionState: TransactionState.REFUSED };
    }
  }
}
