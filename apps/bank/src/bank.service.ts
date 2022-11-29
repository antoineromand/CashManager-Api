import { BankAccount } from '@app/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity, Repository } from 'typeorm';

@Injectable()
export class BankService {

  async getByEmail(email: string): Promise<BankAccount> {
    let res = null;
    const account = await BankAccount.findOne({ where: { email: email } });
    if(account === null) {
      const $account = await BankAccount.createQueryBuilder().insert().into(BankAccount).values({email: email}).execute();
      res = await BankAccount.findOne({where:{id: $account.identifiers[0].id}})
      return res;
    } else {
      return account;
    }
  }

}
