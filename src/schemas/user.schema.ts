import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

class User {
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, saltRounds);
  }

  async compare(pass: string, hash: string): Promise<boolean> {
    return bcrypt.compare(pass, hash);
  }
}

UserSchema.loadClass(User);
