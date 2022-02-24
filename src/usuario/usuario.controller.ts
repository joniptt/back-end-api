import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioCad: UsuarioService) {}

  @Post('cadastrar')
  async cadUsuario(@Body() user: UsuarioObj) {
    return await this.usuarioCad.cadUsuario(user);
  }

  @Get('')
  async getUsers() {}
}
