import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList(event: Event) {
    this.shoppingListService.addMultipleIngredients(this.selectedRecipe.ingredients);
  }

}
