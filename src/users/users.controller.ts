import { Body, Controller, Post } from '@nestjs/common';
import { CreateUSerDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUSerDto) {
    this.usersService.create(body.email, body.password);
  }
}
