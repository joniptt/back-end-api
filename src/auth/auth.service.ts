import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/infraesctructure/modules/user/dto/user.dto';
import { UserRepository } from 'src/infraesctructure/modules/user/infraestructure/user-repository/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne(email);
    if (user && user.password === password) {
      const { id, email } = user;
      return { id, email };
    }
    return null;
  }

  async signJwt(user: UserDto) {
    const payload = {
      userid: user.id,
      sub: user.email,
    };
    return this.jwtService.sign(payload);
  }
  async login(user: UserDto) {
    const token = await this.signJwt(user);
    return { accessToken: token };
  }
}
