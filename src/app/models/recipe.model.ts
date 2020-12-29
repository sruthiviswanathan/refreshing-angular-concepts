import { Ingredient } from './ingredient.model';

export class Recipe {
    
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];
    
    constructor(recipe: any) {
        this.name = recipe.name;
        this.description = recipe.description;
        this.imagePath = recipe.imagePath;
        this.ingredients = recipe.ingredients;
    }
}