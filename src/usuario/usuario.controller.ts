import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioCad: UsuarioService) {}

  @UseGuards(JwtAuthGuard)
  @Post('cadastrar')
  cadUsuario(@Body() user: UsuarioObj) {
    return this.usuarioCad.cadUsuario(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getUsers() {
    return this.usuarioCad.getAll();
  }
}
