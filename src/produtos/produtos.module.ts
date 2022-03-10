import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mouse } from 'src/entities/mouse.entity';
import { PlacaMae } from 'src/entities/placa-mae.entity';
import { Processador } from 'src/entities/processador.entity';
import { Produtos } from 'src/entities/produtos.entity';
import { Teclado } from 'src/entities/teclado.entity';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Teclado, Mouse, PlacaMae, Processador, Produtos]),
  ],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}
