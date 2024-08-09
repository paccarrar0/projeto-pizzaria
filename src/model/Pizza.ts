import Product from "./Product";

export default class Pizza extends Product{
  
  private description: string = "";
  private ingredients: string[] = [];

  
  public setIngredients(ingredients: string[]): void{
    this.ingredients = ingredients;
  }

  public setDescription(description: string): void{
    this.description = description;
  }

  
  public getingredients(): string[]{
    return this.ingredients;
  }
  
  public getDescription(): string{
    return this.description;
  }
}