"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class RegisterEmployee {
    constructor(_EmployeeController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._EmployeeController = _EmployeeController;
    }
    registerEmployee() {
        let name = this.prompt("Insira o nome do funcionário:\n");
        let cpf = this.prompt("Insira o CPF do funcionário:\n");
        let sector = this.prompt("Insira o setor do funcionário:\n");
        this._EmployeeController.registerEmployee(name, cpf, sector);
    }
}
exports.default = RegisterEmployee;
