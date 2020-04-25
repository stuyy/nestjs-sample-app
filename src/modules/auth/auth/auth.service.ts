import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {
    //
  }

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUser(username);
    const result = await user.compare(password, user.password);
    return result ? user : null;
  }
}
