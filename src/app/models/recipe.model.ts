export class Recipe {
    
    public name: string;
    public description: string;
    public imagePath: string;
    
    constructor(recipe: any) {
        this.name = recipe.name;
        this.description = recipe.description;
        this.imagePath = recipe.imagePath;
    }
}