import { IsString, IsNumber, IsEmail } from 'class-validator';

export class UserDto {

  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsEmail()
  email: string;

}