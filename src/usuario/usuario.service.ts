import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/entities/usuario-entity';

@Injectable()
export class UsuarioService {
  constructor() {} // @InjectRepository(Usuario) private userEnti: Repository<Usuario>,
  Usuarios: Usuario[] = [];

  async cadUsuario(user: Usuario) {
    let usuario = new Usuario();
    usuario.email = user.email;
    usuario.password = user.password;
    if (usuario instanceof Usuario) {
      this.Usuarios.push(usuario);
    }

    // if (usuario instanceof Usuario) {
    // .push(usuario);
    // } else {
    //   throw new Error('Usuario ja cadastrado');
    // }
  }

  async loginUsu(user: Usuario) {
    const login = await this.;
  }

  async getAll() {
    return this.Usuarios;
  }
}
