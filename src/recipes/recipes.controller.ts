import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RecipesDto } from 'src/dto/recipe.dto';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipe: RecipesService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addRec(@Body() rec: RecipesDto) {
    this.recipe.postRecipe(rec);
  }

  @UseGuards(JwtAuthGuard)
  @Get('')
  async getRecipes(): Promise<RecipesDto[]> {
    return this.recipe.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOneRec(@Param('id') index: number): Promise<RecipesDto> {
    return this.recipe.getOne(index);
  }
}
