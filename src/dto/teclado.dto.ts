import { IsNotEmpty } from 'class-validator';

export class Teclado {
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
  Iluminacao: string;

  @IsNotEmpty()
  Teclas: string;
}
