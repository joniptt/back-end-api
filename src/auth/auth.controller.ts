import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Public } from 'src/decorators/class.decorator';
import { UserDto } from 'src/infraesctructure/modules/user/dto/user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('user')
export class AuthController {
  constructor(private authLogin: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Body() req: UserDto) {
    return await this.authLogin.login(req);
  }

  @Get('roles/:id')
  async roles(@Param() id: number) {
    if (id === 1) {
      return ['company'];
    } else if (id === 2) {
      return ['company'];
    }
  }

  @Get('profile')
  async profile() {
    const prof = {
      name: 'João',
      role: {
        description: 'Administrador',
        name: 'company',
        permissions: ['read', 'write'],
      },
    };
    return prof;
  }
}
