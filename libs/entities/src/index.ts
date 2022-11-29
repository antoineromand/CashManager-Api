import { BankAccount } from './Bank/BankAccount.entity';
import { Company } from './Company/Company.entity';
import { User } from './Company/User.entity';
import { Product } from './Company/Product.entity';
import { Transaction } from './Company/Transaction.entity';
import { BankTransaction } from './Bank/BankTransaction.entity';

export * from './Company/Company.entity';
export * from './Bank/BankAccount.entity';
export * from './Bank/BankTransaction.entity';
export * from './Company/Product.entity';
export * from './Company/User.entity';
export * from './Company/Transaction.entity';
export const entities_company = [Company, User, Product, Transaction]
export const entities_bank = [BankAccount, BankTransaction]