import { Body, Controller, Get, Post } from '@nestjs/common';
import { Public } from 'src/decorators/class.decorator';
import { UsuarioObj } from 'src/dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioCad: UsuarioService) {}

  @Post('cadastrar')
  async cadUsuario(@Body() user: UsuarioObj) {
    return await this.usuarioCad.cadUsuario(user);
  }

  @Public()
  @Post('maintenance/on')
  async setMaintenceOn(@Body() status: boolean) {
    return await this.usuarioCad.setCacheMaintenance(status);
  }

  @Public()
  @Post('maintenance/off')
  async setMaintenceOff(@Body() status: boolean) {
    return await this.usuarioCad.setCacheMaintenance(status);
  }
  @Public()
  @Get('maintenance/status')
  async getMaintenceStatus(): Promise<boolean> {
    return <boolean>await this.usuarioCad.getCacheMaintenance();
  }
}
