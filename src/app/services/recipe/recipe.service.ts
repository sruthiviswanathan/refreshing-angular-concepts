import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  @Output() recipeSelected = new EventEmitter<Recipe>();

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
}
