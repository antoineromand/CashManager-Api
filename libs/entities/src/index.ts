import { BankAccount } from './BankAccount.entity';
import { Company } from './Company.entity';
import { User } from './User.entity';
import { Product } from './Product.entity';
import { Transaction } from './Transaction.entity';

export * from './Company.entity';
export * from './BankAccount.entity';
export * from './Product.entity';
export * from './Transaction.entity';
export const entities_company = [Company, User, Product, Transaction]
export const entities_bank = [BankAccount]