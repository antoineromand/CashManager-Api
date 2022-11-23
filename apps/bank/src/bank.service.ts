import { BankAccount } from '@app/entities';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseEntity, Repository } from 'typeorm';

@Injectable()
export class BankService {

  async list() {
    return await BankAccount.find();
  }

  
}
