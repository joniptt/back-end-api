import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecipesDto } from 'src/dto/recipe.dto';
import { Recipes } from 'src/entities/recipes.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipes) private recipes: Repository<Recipes>,
  ) {}

  async postRecipe(rec: RecipesDto) {
    const recipe = new Recipes();
    recipe.name = rec.name;
    recipe.description = rec.description;
    recipe.imagePath = rec.imagePath;
    this.recipes.save(recipe);
  }

  async getAll() {
    return this.recipes.find();
  }

  async getOne(id: number) {
    return await this.recipes.findOne({ id: id });
  }
}
