import { Controller, Get } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('private/api/company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }
  @Get()
  list() {
    return this.companyService.list();
  }
}
