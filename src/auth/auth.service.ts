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
      const { id, email, password } = user;
      return { id, email, password };
    }
    return null;
  }
  async login(user: any) {
    const payload = {
      userid: user.id,
      sub: user.email,
    };
    console.log(payload);
    localStorage.setItem(
      'jwtToken',
      await this.jwtService.sign(payload, { expiresIn: '60s' }),
    );
    var token = localStorage.getItem('jwtToken');
    return {
      token: this.jwtService.sign(payload, { expiresIn: '60s' }),
    };
  }
}
