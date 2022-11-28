import { BankAccount } from './BankAccount.entity';
import { Company } from './Company.entity';
import { User } from './User.entity';

export * from './Company.entity';
export * from './BankAccount.entity';
export const entities_company = [Company, User]
export const entities_bank = [BankAccount]