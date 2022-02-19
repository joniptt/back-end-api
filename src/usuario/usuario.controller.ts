import { Body, Controller, Get, Post } from '@nestjs/common';
import { Usuario } from 'src/entities/usuario-entity';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioCad: UsuarioService) {}

  @Post('cadastrar')
  cadUsuario(@Body() user: Usuario) {
    return this.usuarioCad.cadUsuario(user);
  }

  @Get('')
  async getUsers() {
    return this.usuarioCad.getAll();
  }

  @Post('login')
  async getOneRec() {}
}
