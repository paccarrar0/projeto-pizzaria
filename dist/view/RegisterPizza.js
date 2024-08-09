"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class RegisterPizza {
    constructor(pizzaController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._PizzaController = pizzaController;
    }
    collectIngredients() {
        let ingredients = [];
        console.log("Digite os ingredientes da pizza (digite 'fim' para terminar):");
        while (true) {
            let ingredient = this.prompt("Ingrediente: ");
            if (ingredient.toLowerCase() === "fim")
                break;
            ingredients.push(ingredient);
        }
        return ingredients;
    }
    registerPizza() {
        let name = this.prompt("Digite o nome da pizza: ");
        let size = this.prompt("Digite o tamanho da pizza: ");
        let price = Number(this.prompt("Digite o preço da pizza: "));
        let description = this.prompt("Digite uma breve descrição da pizza: ");
        let ingredients = this.collectIngredients();
        this._PizzaController.registerPizza(name, size, price, ingredients, description);
    }
}
exports.default = RegisterPizza;
