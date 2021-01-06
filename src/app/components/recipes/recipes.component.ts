import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage/data-storage.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
  }

}
