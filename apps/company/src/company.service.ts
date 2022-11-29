import { Company } from '@app/entities';
import { User } from '@app/entities/User.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CompanyDTO, UserDTO } from './dto/register.dto';

@Injectable()
export class CompanyService {
  async list() {
    return await Company.find();
  }
  async findOne(email: string): Promise<User | undefined> {
    return await User.findOne({ where: { email: email }, relations: ['company'] })
  }

  async createCompany(company: CompanyDTO) {
    const _company = await Company.findOne({ where: { name: company.name } });
    if (_company === null) {
      const $company = new Company();
      $company.name = company.name;
      $company.icon = company.icon;
      await $company.save();
      const new_company = await Company.findOne({ where: { name: $company.name } });
      return new_company;
    }
    else throw new HttpException('Company already exists !', HttpStatus.CONFLICT)
  }

  async register(user: UserDTO) {
    const _company = await this.createCompany(user.company);
    const _user = await User.findOne({ where: { email: user.email } });
    if (_user === null) {
      const $user = new User();
      $user.email = user.email;
      $user.password = user.password;
      $user.role = user.role;
      $user.company = _company;
      await $user.save();
      return $user;
    }
    else throw new HttpException('User already exists !', HttpStatus.CONFLICT)
  }
}
