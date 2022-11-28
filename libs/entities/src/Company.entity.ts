import { BaseEntity, BeforeInsert, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

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
}