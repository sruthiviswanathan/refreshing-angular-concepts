import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();
  private recipesList: Recipe[] = [
    new Recipe({
      name: 'apple-pie', description: 'Delicious apple-pie', imagePath: 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg',
      ingredients: [
        {
          name: 'sugar',
          amount: 500,
          unit: 'grams'
        },
        {
          name: 'apple',
          amount: 5,
          unit: 'Nos'
        }
      ]
    }),
    new Recipe({
      name: 'banana-pie', description: 'Delicious banana-pie', imagePath: 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/06/15-Minute-Banana-Cream-Pie-WS-thumbnail.jpg',
      ingredients: [
        {
          name: 'sugar',
          amount: 500,
          unit: 'grams'
        },
        {
          name: 'banana',
          amount: 6,
          unit: 'Nos'
        }
      ]
    })
  ];

  constructor() { }


  getRecipes() {
    return this.recipesList.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipesList[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipesList.push(recipe);
    this.recipesChanged.next(this.recipesList.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipesList[index] = newRecipe;
    this.recipesChanged.next(this.recipesList.slice());
  }

  deleteRecipe(index: number) {
    this.recipesList.splice(index, 1);
    this.recipesChanged.next(this.recipesList.slice());
  }
}
