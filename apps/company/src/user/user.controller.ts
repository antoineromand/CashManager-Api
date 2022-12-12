import { JwtAuthGuard } from '@app/auth';
import { Body, Controller, Param, Put, UseGuards } from '@nestjs/common';
import { UserDTO } from '../dto/register.dto';
import { UserService } from './user.service';

@Controller('/private/api/company/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put(':id')
    @UseGuards(JwtAuthGuard)
    async update(@Param('id') id:string, @Body() user: UserDTO) {
      return await this.userService.update(id, user);
    }
}
