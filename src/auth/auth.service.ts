import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import jwtDecode from 'jwt-decode';
import { UsuarioObj } from 'src/dto/usuario.dto';
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
      const { id, email } = user;
      return { id, email };
    }
    return null;
  }

  async signJwt(user: UsuarioObj) {
    const payload = {
      userid: user.id,
      sub: user.email,
    };
    return this.jwtService.sign(payload);
  }
  async login(user: UsuarioObj) {
    const token = await this.signJwt(user);
    const userData = jwtDecode(token);
    return { token: token, decoded: userData };
  }
}
