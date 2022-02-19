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
    this.userEnti.save(usuario);
  }

  async loginUsu() {}

  async getAll() {
    return this.userEnti.recover;
  }
}
