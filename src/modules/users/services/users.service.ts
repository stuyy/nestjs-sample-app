/* eslint-disable no-empty-function */
import {
  Injectable,
  Inject,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
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

  async createUser(user: UserDto): Promise<User> {
    try {
      const findUser = await this.userModel.findOne({ email: user.email });
      if (findUser) {
        throw new HttpException({
          message: 'Cannot create user',
          status: HttpStatus.CONFLICT,
        }, HttpStatus.CONFLICT);
      }
      const newUser = await this.userModel.create({
        name: user.name,
        age: user.age,
        email: user.email,
        password: user.password,
      });
      newUser.password = await newUser.hash(newUser.password);
      newUser.save();
      return newUser;
    } catch (err) {
      return err;
    }
  }

  async deleteUser(id: string) {
    try {
      await this.userModel.deleteOne({ _id: id });
      return { message: 'Success' };
    } catch (err) {
      return { error: 'Something went wrong.' };
    }
  }

  async findUser(email: string): Promise<User> {
    return this.userModel.findOne({ email });
  }
}
