import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'recipes', loadChildren:() =>  import( './components/recipes/recipes.module').then(m => m.RecipesModule)},
    { path: 'shoppingList', loadChildren:() =>  import( './components/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}