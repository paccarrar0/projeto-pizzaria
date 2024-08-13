"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class ManagePerson {
    constructor(_ManageClient, _ManageEmployee, employeeController, clientController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.employeeController = employeeController;
        this._ManageClient = _ManageClient;
        this._ManageEmployee = _ManageEmployee;
        this.clientController = clientController;
    }
    managePersonScreen() {
        let showScreen = false;
        while (!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Cadastro Funcionário\n2 - Cadastro Cliente\n3 - Adicionar Venda\n4 - Adicionar Compra\n5 - Listar total movido por cliente\n6 - Listar total movido por funcionario\n7 - Listar\n8 - Sair");
            switch (choice) {
                case "1":
                    console.clear();
                    this._ManageEmployee.registerEmployee();
                    break;
                case "2":
                    console.clear();
                    this._ManageClient.registerClient();
                    break;
                case "3":
                    console.clear();
                    this._ManageEmployee.registerSale();
                    break;
                case "4":
                    console.clear();
                    this._ManageClient.registerOrder();
                    break;
                case "5":
                    console.clear();
                    this._ManageClient.getMoneyMoved();
                    break;
                case "6":
                    console.clear();
                    this._ManageEmployee.getMoneyMoved();
                    break;
                case "7":
                    console.clear();
                    console.log(this.employeeController.showEmployee(), this.clientController.showClient());
                    break;
                case "8":
                    showScreen = true;
                    break;
                default:
                    console.log("Invalid answer!");
            }
        }
    }
}
exports.default = ManagePerson;
