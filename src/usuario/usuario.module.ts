import { CacheModule, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Usuario } from 'src/entities/usuario.entity';
import { CacheService } from './cache.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [
    CacheModule.register({ isGlobal: true, ttl: 3600 * 3 }),
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [UsuarioController],
  providers: [
    UsuarioService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    CacheService,
  ],
  exports: [UsuarioService],
})
export class UsuarioModule {}
