import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesList: Recipe[] = [
    new Recipe({name: 'apple-pie', description: 'Delicious apple-pie', imagePath: 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg'}),
    new Recipe({name: 'apple-pie', description: 'Delicious apple-pie', imagePath: 'https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg'})
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
