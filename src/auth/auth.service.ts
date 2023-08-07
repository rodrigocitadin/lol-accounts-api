import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { AuthUser } from './types/auth-user';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  async validateUser(username: string, password: string): Promise<AuthUser> {
    const user = await this.userService.findOne(username);

    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result
    }

    return null;
  }

  async login(user: AuthUser) {
    const payload = { username: user.username, sub: user.id }
  }
}
