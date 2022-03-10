import { ProdutosModule } from './produtos/produtos.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ProdutosModule,
    AuthModule,
    RecipesModule,
    UsuarioModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
