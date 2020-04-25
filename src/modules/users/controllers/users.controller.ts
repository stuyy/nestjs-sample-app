import {
  Controller,
  Get,
  Res,
  Post,
  Body,
  UsePipes,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from '../services/users.service';
import { UserDto } from '../dto/user.dto';
import { UserValidationPipe } from '../pipes/user.pipe';
import { UserDtoSchema } from '../schemas/UserDto.schema';
import { AuthenticatedGuard } from 'src/modules/auth/guards/auth.guard';

@Controller('users')
export class UsersController {
  private userService: UsersService;

  constructor(usersService: UsersService) {
    this.userService = usersService;
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  @HttpCode(200)
  async getUsers(@Res() res: Response) {
    return res.json(await this.userService.getUsers());
  }

  @Post()
  @UsePipes(new UserValidationPipe(UserDtoSchema))
  async createUser(@Body() user: UserDto,
  @Res() res: Response) {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.createUser(user));
  }

  @Delete()
  async deleteUser(
    @Body('id') id: string,
    @Res() res: Response,
  ) {
    return res
      .status(HttpStatus.ACCEPTED)
      .json(await this.userService.deleteUser(id));
  }
}
