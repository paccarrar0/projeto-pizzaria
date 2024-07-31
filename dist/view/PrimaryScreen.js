"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(pizzaController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.pizzaController = pizzaController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            // Get user input
            //console.clear();
            let choice = this.prompt("Escolha:\n1 - Cadastro Pizza\n2 - Listar\n3 - Sair");
            switch (choice) {
                case "1":
                    //aqui pedimos uma instancia de FoodProduct para o controller
                    let pizza = this.pizzaController.getNewPizza();
                    this.registerFood(pizza);
                    break;
                case "2":
                    //console.clear();
                    console.log(this.pizzaController.showPizza());
                    break;
                case "3":
                    showScreen = true;
                    break;
                default:
                    //console.clear();
                    console.log("Invalid answer!");
            }
        }
    }
    registerFood(pizza) {
        let name = this.prompt("Digite o nome da pizza");
        pizza.setName(name);
        //aqui requisito para o controller o registro da comida no BD
        this.pizzaController.setNewPizza(pizza);
        //this.pizzaController.listAllFoods();
    }
}
exports.default = PrimaryScreen;
