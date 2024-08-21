"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class ManageProduct {
    constructor(pizzaController, _ManagePizza, _ManageSoda, sodaController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.pizzaController = pizzaController;
        this._ManagePizza = _ManagePizza;
        this._ManageSoda = _ManageSoda;
        this.sodaController = sodaController;
    }
    manageProductScreen() {
        let showScreen = false;
        while (!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Cadastro Pizza\n2 - Cadastro Refri\n3 - Excluir Pizza\n4 - Excluir Refri\n5 - Listar\n6 - Sair\n");
            switch (choice) {
                case "1":
                    console.clear();
                    this._ManagePizza.registerPizza();
                    break;
                case "2":
                    console.clear();
                    this._ManageSoda.registerSoda();
                    break;
                case "3":
                    console.clear();
                    console.clear();
                    this._ManagePizza.removePizza();
                    break;
                case "4":
                case "5":
                    console.clear();
                    console.log(this.pizzaController.showPizza(), this.sodaController.showSoda());
                    break;
                case "6":
                    showScreen = true;
                    break;
                default:
                    console.log("Selecione uma opção válida!");
            }
        }
    }
}
exports.default = ManageProduct;
