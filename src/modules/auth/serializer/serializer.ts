import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import User from 'src/modules/users/interfaces/IUser';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(user: User, done: (err: Error, user: any) => void): any {
    done(null, user);
  }

  deserializeUser(payload: any, done: (err: Error, payload: string) => void): any {
    done(null, payload);
  }
}
