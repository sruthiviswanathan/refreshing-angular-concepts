import { Injectable, Output } from '@angular/core';
import {Subject} from 'rxjs';
import { Ingredient } from 'src/app/models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  @Output() ingredientArray = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientByIndex(id: number) {
    return this.ingredients[id];
  }

  updateIngredientList(index:number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientArray.next(this.ingredients.slice());
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientArray.next(this.ingredients.slice());
  }

  addMultipleIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientArray.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientArray.next(this.ingredients.slice());
  }
}
