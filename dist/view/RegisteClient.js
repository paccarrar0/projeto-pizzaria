"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class RegisterClient {
    constructor(_ClientController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._ClientController = _ClientController;
    }
    registerClient() {
        let name = this.prompt("Insira o nome do cliente:\n");
        let cpf = this.prompt("Insira o CPF do cliente:\n");
        this._ClientController.registerClient(name, cpf);
    }
}
exports.default = RegisterClient;
