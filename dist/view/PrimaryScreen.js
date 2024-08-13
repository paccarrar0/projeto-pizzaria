"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const ManageProduct_1 = __importDefault(require("./ManageProduct"));
const ManagePerson_1 = __importDefault(require("./ManagePerson"));
class PrimaryScreen {
    constructor(_ManagePizza, _ManageSoda, _ManageEmployee, _ManageClient, pizzaController, sodaController, employeeController, clientController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._ManagePizza = _ManagePizza;
        this._ManageSoda = _ManageSoda;
        this._ManageEmployee = _ManageEmployee;
        this._ManageClient = _ManageClient;
        this.pizzaController = pizzaController;
        this.sodaController = sodaController;
        this.employeeController = employeeController;
        this.clientController = clientController;
    }
    getFirstScreen() {
        let _ManageProduct = new ManageProduct_1.default(this.pizzaController, this._ManagePizza, this._ManageSoda, this.sodaController);
        let _ManagePerson = new ManagePerson_1.default(this._ManageClient, this._ManageEmployee, this.employeeController, this.clientController);
        let showScreen = false;
        while (!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Gerenciar Produtos\n2 - Gerenciar Pessoas\n3 - Sair\n");
            switch (choice) {
                case "1":
                    console.clear();
                    _ManageProduct.manageProductScreen();
                    break;
                case "2":
                    console.clear();
                    _ManagePerson.managePersonScreen();
                    break;
                case "3":
                    showScreen = true;
                    break;
                default:
                    console.log("Invalid answer!");
            }
        }
    }
}
exports.default = PrimaryScreen;
