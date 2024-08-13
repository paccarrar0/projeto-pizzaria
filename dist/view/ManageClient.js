"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class ManageClient {
    constructor(_ClientController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._ClientController = _ClientController;
    }
    registerClient() {
        let name = this.prompt("Insira o nome do cliente: ");
        let cpf = this.prompt("Insira o CPF do cliente: ");
        this._ClientController.registerClient(name, cpf);
    }
    registerOrder() {
        let cpf = this.prompt("Insira o CPF do cliente: ");
        let order = Number(this.prompt("Insira o valor da compra: ")); //Tratar entrada não numérica
        this._ClientController.setOrder(cpf, order);
    }
    getMoneyMoved() {
        let cpf = this.prompt("Insira o cpf do cliente: ");
        this._ClientController.getMoneyMoved(cpf);
    }
}
exports.default = ManageClient;
