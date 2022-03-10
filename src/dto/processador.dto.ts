import { IsNotEmpty } from 'class-validator';

export class Processador {
  id?: number;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  img: string;

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
}
