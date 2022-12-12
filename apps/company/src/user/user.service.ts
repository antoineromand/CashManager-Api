import { User, Company } from '@app/entities';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserDTO } from '../dto/register.dto';



@Injectable()
export class UserService {
    async update(id: string, user: UserDTO): Promise<User> {
        const _user = await User.findOne({ where: { id: id }, relations: ['company'] });
        if (!_user) throw new HttpException('User not found !', HttpStatus.NOT_FOUND);
        _user.password = user.password;
        const company = await Company.findOne({ where: { id: _user.company.id } });
        company.name = user.company.name;
        company.icon = user.company.icon;
        await company.save();
        _user.company = company;
        _user.role = user.role;
        _user.password = bcrypt.hashSync(_user.password, 10);
        await _user.save()
        _user.password = undefined;
        return _user;
    }
}
