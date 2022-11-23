import { Company } from '@app/entities';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompanyService {
  async list() {
    return await Company.find();
  }
}
