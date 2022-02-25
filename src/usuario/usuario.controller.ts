import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/decorators/class.decorator';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioCad: UsuarioService) {}

  @Public()
  @Post('cadastrar')
  async cadUsuario(@Body() user: UsuarioObj) {
    return await this.usuarioCad.cadUsuario(user);
  }

  @Public()
  @Post('maintenance/on')
  async setMaintenceOn(@Body() { status: boolean, message: string }) {
    return await this.usuarioCad.setCacheMaintenance({
      status: boolean,
      message: string,
    });
  }

  @Public()
  @Post('maintenance/off')
  async setMaintenceOff(@Body() { status: boolean, message: string }) {
    return await this.usuarioCad.setCacheMaintenance({
      status: boolean,
      message: string,
    });
  }

  @Public()
  @Get('maintenance/status')
  async getMaintenceStatus(): Promise<{
    status: boolean;
    message: string;
  }> {
    return await this.usuarioCad.getCacheMaintenance();
  }
}
