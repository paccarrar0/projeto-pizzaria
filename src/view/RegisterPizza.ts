import PizzaController from "../control/PizzaController";
import PromptSync from "prompt-sync";

export default class RegisterPizza {
  private _PizzaController: PizzaController;
  private prompt = PromptSync();

  constructor(pizzaController: PizzaController){
    this._PizzaController = pizzaController;
  }

  private collectIngredients(): string[] {
    let ingredients: string[] = [];
    console.log("Digite os ingredientes da pizza (digite 'fim' para terminar):");
    while (true) {
      let ingredient = this.prompt("Ingrediente: ");
      if (ingredient.toLowerCase() === "fim") break;
      ingredients.push(ingredient);
    }
    return ingredients;
  }

  public registerPizza(): void {
    let name: string = this.prompt("Digite o nome da pizza: ");
    let size: string = this.prompt("Digite o tamanho da pizza: ");
    let price: number = Number(this.prompt("Digite o preço da pizza: "));
    let description: string = this.prompt("Digite uma breve descrição da pizza: ");
    let ingredients: string[] = this.collectIngredients();

    this._PizzaController.registerPizza(name, size, price, ingredients, description);
  }
}

