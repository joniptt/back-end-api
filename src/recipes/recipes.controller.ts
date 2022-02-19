/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param, Post } from '@nestjs/common';
import { Recipes } from 'src/dto/recipe.dto';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipe: RecipesService) {}

  @Post('add')
  cadUsuario() {}

  @Get('')
  async getUsuarios(): Promise<Recipes[]> {
    return this.recipe.getAll();
  }

  @Get(':id')
  async getOneRec(@Param('id') index: number): Promise<Recipes> {
    return this.recipe.getOne(index);
  }
}
