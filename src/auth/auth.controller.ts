import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Public } from 'src/decorators/class.decorator';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authLogin: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Public()
  @Post('login')
  async login(@Req() req: any) {
    return await this.authLogin.login(req.user);
  }
}
