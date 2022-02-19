import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioCad: UsuarioService) {}

  @Post('cadastrar')
  cadUsuario(@Body() user: UsuarioObj) {
    return this.usuarioCad.cadUsuario(user);
  }

  @Get('')
  async getUsers() {
    return this.usuarioCad.getAll();
  }

  @Post('login')
  async getOneRec() {}
}
