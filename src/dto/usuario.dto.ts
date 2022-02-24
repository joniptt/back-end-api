import { IsNotEmpty } from 'class-validator';

export class UsuarioObj {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
