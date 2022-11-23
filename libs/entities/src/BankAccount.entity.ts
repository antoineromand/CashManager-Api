import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BankAccount extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    balance: number;
}