import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient({name: 'apple', amount: 5 , unit: 'Nos'}),
    new Ingredient({name: 'Sugar', amount: 500, unit: 'grams'}),
    new Ingredient({name: 'Milk', amount: 1, unit: 'litre'})
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateIngredientList(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
