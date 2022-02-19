import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [RecipesModule, UsuarioModule, UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
