import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private userEnti: Repository<Usuario>,
  ) {}

  async cadUsuario(user: UsuarioObj) {
    const usuario = new Usuario();
    usuario.email = user.email;
    usuario.password = user.password;
    const userEmail = await this.userVerify(usuario.email);
    if (userEmail === null) {
      this.userEnti.save(usuario);
    } else {
      return 'error';
    }
  }

  async userVerify(email: string) {
    const vEmail = await this.userEnti.findOne({ where: { email } });
    if (vEmail != null) {
      return 'email existente';
    } else {
      return null;
    }
  }

  async loginUsu() {}

  async getAll() {
    return this.userEnti.recover;
  }
}
