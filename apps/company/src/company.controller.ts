import { JwtAuthGuard } from '@app/auth';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { UserDTO } from './dto/register.dto';

@Controller('private/api/company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }
  @UseGuards(JwtAuthGuard)
  @Get()
  list() {
    return this.companyService.list();
  }
  @Post('register')
  async register(@Body() user: UserDTO) {
    return this.companyService.register(user);
  }
}
