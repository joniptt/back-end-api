import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecipesDto } from 'src/dto/recipe.dto';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipe: RecipesService) {}

  @Post('add')
  async addRec(@Body() rec: RecipesDto) {
    this.recipe.postRecipe(rec);
  }

  @Get('')
  async getRecipes(): Promise<RecipesDto[]> {
    return this.recipe.getAll();
  }

  @Get(':id')
  async getOneRec(@Param('id') index: number): Promise<RecipesDto> {
    return this.recipe.getOne(index);
  }
}
