import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BankTransaction } from "./BankTransaction.entity";

@Entity()
export class BankAccount extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false, unique: true })
    email: string;

    @Column({ nullable: false, default: 20 })
    balance: number;

    @OneToMany(() => BankTransaction, (transaction) => transaction.creditor)
    from: BankTransaction[];

    @OneToMany(() => BankTransaction, (transaction) => transaction.debtor)
    to: BankTransaction[];
}