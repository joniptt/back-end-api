import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { Usuario } from 'src/entities/usuario.entity';
import { Repository } from 'typeorm';
import { CacheService } from './cache.service';

@Injectable()
export class UsuarioService {
  constructor(
    private cacheManager: CacheService,
    @InjectRepository(Usuario) private userEnti: Repository<Usuario>,
  ) {}

  async cadUsuario(user: UsuarioObj) {
    const usuario = new Usuario();
    usuario.email = user.email;
    usuario.password = user.password;
    const userEmail = await this.userVerify(usuario.email);
    try {
      if (userEmail === null) {
        this.userEnti.save(usuario);
        return { message: 'Cadastro realizado com sucesso!' };
      }
      throw new Error();
    } catch (error) {
      return { message: 'Não foi possível realizar o cadastro!' };
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

  async loginVerify(email: string) {
    return await this.userEnti.findOne({ where: { email } });
  }

  async getAll() {
    return this.userEnti.find();
  }

 
}
