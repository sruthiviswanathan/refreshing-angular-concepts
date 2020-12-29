import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  @Output() ingredientArray = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientArray.emit(this.ingredients.slice());
  }

  addMultipleIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientArray.emit(this.ingredients.slice());
  }

  deleteIngredient() {

  }
}
