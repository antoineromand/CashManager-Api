import { TransactionState } from "@app/utils/enum/state";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { BankAccount } from "./BankAccount.entity";



@Entity()
export class BankTransaction extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => BankAccount, (account) => account.to)
    debtor: BankAccount;

    @ManyToOne(() => BankAccount, (account) => account.from)
    creditor: BankAccount;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable: false })
    amount: number;

    @Column({
        type: 'enum',
        enum: TransactionState,
        default: TransactionState.CANCELED
    })
    transactionState: TransactionState;
}