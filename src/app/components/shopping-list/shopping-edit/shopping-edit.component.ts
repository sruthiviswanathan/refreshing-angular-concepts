import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/models/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';
import { ShoppingListComponent } from '../shopping-list.component';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;
  @ViewChild('unitInput', {static: true}) unitInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(event: Event) {
    event.preventDefault();
    const ingredient = {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
      unit: this.unitInput.nativeElement.value
    };
    this.shoppingListService.addIngredients(ingredient);
  }

}
