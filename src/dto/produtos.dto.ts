import { IsNotEmpty } from 'class-validator';
export class Produtos {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  preco: number;

  @IsNotEmpty()
  Marca: string;

  @IsNotEmpty()
  Modelo: string;

  @IsNotEmpty()
  Soquete: string;

  @IsNotEmpty()
  Núcleos: string;

  @IsNotEmpty()
  Threads: string;

  @IsNotEmpty()
  Cor: string;

  @IsNotEmpty()
  DPI: string;

  @IsNotEmpty()
  CPU: string;

  @IsNotEmpty()
  Chipset: string;
}
