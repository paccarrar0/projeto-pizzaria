"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class ManageEmployee {
    constructor(_EmployeeController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._EmployeeController = _EmployeeController;
    }
    registerEmployee() {
        let name = this.prompt("Insira o nome do funcionário: ");
        let cpf = this.prompt("Insira o CPF do funcionário: ");
        let sector = this.prompt("Insira o setor do funcionário: ");
        this._EmployeeController.registerEmployee(name, cpf, sector);
    }
    registerSale() {
        let employee = this.prompt("Insira o CPF do funcionário: ");
        let sale = Number(this.prompt("Insira o valor da venda: ")); //Tratar a entrada de não números
        this._EmployeeController.setSale(employee, sale);
    }
    getMoneyMoved() {
        let cpf = this.prompt("Insira o cpf do funcionário: ");
        this._EmployeeController.getMoneyMoved(cpf);
    }
}
exports.default = ManageEmployee;
