import { IsNotEmpty } from 'class-validator';

export class RecipesDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  imagePath: string;
}
