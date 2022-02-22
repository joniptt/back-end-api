import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsuarioService,
    private jwtService: JwtService,
  ) {}
  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.loginVerify(email);
    if (user && user.password === pass) {
      const { email, password } = user;
      return { email, password };
    }
    return null;
  }
  async login(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
    };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
