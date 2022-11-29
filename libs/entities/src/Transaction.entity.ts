import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Company } from "./Company.entity";
import { Product } from "./Product.entity";

@Entity()
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Company, (company) => company.id, { nullable: false })
    company: Company;
    @Column({ nullable: false })
    client_email: string;
    @Column({ type: "decimal", precision: 10, scale: 2 })
    amount: number;
}