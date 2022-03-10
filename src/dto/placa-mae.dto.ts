import { IsNotEmpty } from 'class-validator';

export class PlacaMae {
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
  CPU: string;

  @IsNotEmpty()
  Chipset: string;
}
