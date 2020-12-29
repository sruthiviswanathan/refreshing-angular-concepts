import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipesList: Recipe[] = [
    new Recipe({name: 'apple-pie', description: 'Delicious apple-pie', imagePath: 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg'}),
    new Recipe({name: 'banana-pie', description: 'Delicious banana-pie', imagePath: 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg'})
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
