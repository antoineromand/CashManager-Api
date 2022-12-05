import { Injectable } from '@nestjs/common';
import { CompanyService } from 'apps/company/src/company.service';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@app/utils';
import { Company } from '@app/entities';
import * as bcrypt from 'bcrypt';

type UserResponse = {
    id: string,
    email: string,
    role: Role,
    company: Company
}

@Injectable()
export class AuthService {
    constructor(private companyService: CompanyService, private jwtService: JwtService) { }
    async validateUser(email: string, pass: string): Promise<{ user: UserResponse, token: string }> {
        const user = await this.companyService.findOne(email);
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            const token = await this.login(result);
            return { user: result, token: token.access_token };
        } else {
            return null
        }
    }

    async login(user: UserResponse) {
        const payload = { username: user.email, sub: user.id };
        const result = {
            access_token: this.jwtService.sign(payload),
        };
        return result;
    }
}
