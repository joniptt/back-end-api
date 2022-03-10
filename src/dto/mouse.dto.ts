import { IsNotEmpty } from 'class-validator';

export class Mouse {
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
  Cor: string;

  @IsNotEmpty()
  DPI: string;
}
