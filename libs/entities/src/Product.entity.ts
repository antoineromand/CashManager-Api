import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn, Entity } from "typeorm";
import { Company } from './Company.entity';

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    price: number;

    @ManyToOne(() => Company, (company) => company.product)
    company: Company;
}