/* eslint-disable no-empty-function */
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserDto } from '../dto/user.dto';
import User from '../interfaces/IUser';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_MODEL') private userModel: Model<User>) {

  }

  async getUsers() {
    return this.userModel.find();
  }

  async createUser(user: UserDto) {
    const newUser = await this.userModel.create({
      name: user.name,
      age: user.age,
      email: user.email,
    });
    return newUser;
  }
}
