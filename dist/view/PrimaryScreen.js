"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(pizzaController, _RegisterPizza, _RegisterSoda, sodaController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.pizzaController = pizzaController;
        this._RegisterPizza = _RegisterPizza;
        this._RegisterSoda = _RegisterSoda;
        this.sodaController = sodaController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Cadastro Pizza\n2 - Cadastro Refri\n3 - Cadastro Cliente\n4 - Cadastro Funcionário\n5 - Listar\n6 - Sair\n");
            switch (choice) {
                case "1":
                    this._RegisterPizza.registerPizza();
                    break;
                case "2":
                    this._RegisterSoda.registerSoda();
                    break;
                case "5":
                    console.log(this.pizzaController.showPizza(), this.sodaController.showSoda());
                    break;
                case "6":
                    showScreen = true;
                    break;
                default:
                    console.log("Invalid answer!");
            }
        }
    }
}
exports.default = PrimaryScreen;
