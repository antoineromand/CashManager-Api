import { BaseEntity, BeforeInsert, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from './Product.entity';
import { Transaction } from "./Transaction.entity";
import { User } from './User.entity';

@Entity()
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: false })
    name: string;

    @Column({ nullable: true })
    icon: string;

    @OneToOne(() => User, (user) => user.company)
    user: User;

    @OneToMany(() => Product, (product) => product.company)
    products: Product[];

    @OneToMany(() => Transaction, (transaction) => transaction.company)
    transations: Transaction[];
}