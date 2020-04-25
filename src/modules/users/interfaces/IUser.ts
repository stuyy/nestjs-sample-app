import { Document } from 'mongoose';

export default interface User extends Document {
  readonly name: string;
  readonly age: number;
  readonly email: string;
  password: string;
  readonly hash: Function;
  readonly compare: Function;
}
