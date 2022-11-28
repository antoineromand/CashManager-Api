import { BaseEntity, BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt"
import { Role } from "libs/utils/src/auth/role";
import { Company } from "./Company.entity";



@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.COMPANY
    })
    role: Role;

    @OneToOne(() => Company, (company) => company.id)
    @JoinColumn()
    company: Company;

    @BeforeInsert()
    async hash_password() {
        const saltOrRounds = 10;
        this.password = await bcrypt.hash(this.password, saltOrRounds);
    }
}