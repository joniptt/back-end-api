import { Controller, Get } from '@nestjs/common';
import { ProdutosService } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  constructor(private produtos: ProdutosService) {}

  @Get('')
  async getProdutos() {
      
  }

  @Get('teclado')
  async getTeclado() {
    return this.produtos.getAllTeclados();
  }

  @Get('mouse')
  async getMouse() {
    return this.produtos.getAllMouse();
  }

  @Get('processador')
  async getProcessador() {
    return this.produtos.getAllProcessador();
  }

  @Get('placa-mae')
  async getPlacaMae() {
    return this.produtos.getAllPlacaMae();
  }
}
