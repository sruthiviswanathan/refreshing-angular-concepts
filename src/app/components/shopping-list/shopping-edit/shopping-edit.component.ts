import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('shoppingForm', {static: true}) shoppingForm: NgForm;
  private subscription: Subscription;
  editMode: boolean = false;
  ingredientIndex: number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
    .subscribe((index) => {
      this.editMode = true;
      this.ingredientIndex = index;
      const fetchedIngredient = this.shoppingListService.getIngredientByIndex(index);
      this.shoppingForm.setValue({
        name: fetchedIngredient.name,
        amount: fetchedIngredient.amount,
        unit: fetchedIngredient.unit
      })
    });
  }

  addItemToShoppingList(form: NgForm) {
    const formValue = form.value;
    const ingredient = {
      name: formValue.name,
      amount: formValue.amount,
      unit: formValue.unit
    };
    if (this.editMode) {
      this.editMode = false;
      this.shoppingListService.updateIngredientList(this.ingredientIndex, ingredient);
    } else {
      this.shoppingListService.addIngredients(ingredient);
    }
    this.clearForm();
  }

  clearForm() {
    this.shoppingForm.reset();
    this.editMode = this.editMode ? false : this.editMode;
  }

  deleteItem() {
    this.shoppingListService.deleteIngredient(this.ingredientIndex);
    this.clearForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
