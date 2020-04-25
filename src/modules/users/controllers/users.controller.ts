import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  UsePipes,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../services/users.service';
import { UserDto } from '../dto/user.dto';
import { UserValidationPipe } from '../pipes/user.pipe';
import { UserDtoSchema } from '../schemas/UserDto.schema';

@Controller('users')
export class UsersController {
  private userService: UsersService;

  constructor(usersService: UsersService) {
    this.userService = usersService;
  }

  @Get()
  async getUser(@Res() res: Response) {
    return res.json(await this.userService.getUsers());
  }

  @Post()
  @UsePipes(new UserValidationPipe(UserDtoSchema))
  async createUser(@Body() user: UserDto,
  @Res() res: Response) {
    return res.json(await this.userService.createUser(user));
  }
}
