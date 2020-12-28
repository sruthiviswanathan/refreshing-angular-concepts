export class Ingredient {
    public name: string;
    public amount: number;
    public unit: string;

    constructor(ingredient: any) {
        this.name = ingredient.name;
        this.amount = ingredient.amount;
        this.unit = ingredient.unit;
    }
}