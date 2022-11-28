import { BaseEntity, BeforeInsert, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from './Product.entity';
import { User } from './User.entity';

@Entity()
export class Company extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    icon: string;

    @OneToOne(() => User, (user) => user.company)
    user: User;

    @OneToMany(() => Product, (product) => product.company)
    product: Product[];
}