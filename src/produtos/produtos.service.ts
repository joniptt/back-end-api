import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mouse } from 'src/entities/mouse.entity';
import { PlacaMae } from 'src/entities/placa-mae.entity';
import { Processador } from 'src/entities/processador.entity';
import { Teclado } from 'src/entities/teclado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Teclado) private teclado: Repository<Teclado>,
    @InjectRepository(PlacaMae) private placaMae: Repository<PlacaMae>,
    @InjectRepository(Mouse) private mouse: Repository<Mouse>,
    @InjectRepository(Processador) private processador: Repository<Processador>,
  ) {}


    

  async getAllTeclados() {
    return this.teclado.find();
  }

  async getAllProcessador() {
    return this.processador.find();
  }
  async getAllMouse() {
    return this.mouse.find();
  }
  async getAllPlacaMae() {
    return this.placaMae.find();
  }
}
