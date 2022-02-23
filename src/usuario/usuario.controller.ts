import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioCad: UsuarioService) {}

  @Post('cadastrar')
  async cadUsuario(@Body() user: UsuarioObj) {
    return await this.usuarioCad.cadUsuario(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getUsers() {}
}
