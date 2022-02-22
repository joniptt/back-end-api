import { IsNotEmpty } from 'class-validator';

export class UsuarioObj {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
