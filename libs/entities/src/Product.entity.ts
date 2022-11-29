import { BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn, Entity } from "typeorm";
import { Company } from './Company.entity';

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0, nullable: false })
    price: number;

    @ManyToOne(() => Company, (company) => company.products, { nullable: false })
    company: Company;
}