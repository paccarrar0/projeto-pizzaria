"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = __importDefault(require("../db/DataBase"));
const Employee_1 = __importDefault(require("../model/Employee"));
class EmployeeController {
    constructor() {
        this.dataBase = DataBase_1.default.getInstance();
    }
    showEmployee() {
        return this.dataBase.listEmployee();
    }
    registerEmployee(name, cpf, sector) {
        let employee = new Employee_1.default();
        employee.setName(name);
        employee.setCpf(cpf);
        employee.setSector(sector);
        this.dataBase.addEmployee(employee);
    }
    setSale(cpf, sale) {
        this.dataBase.addSale(cpf, sale);
    }
    getMoneyMoved(cpf) {
        let employees = this.dataBase.listEmployee();
        let employee = employees[this.dataBase.getEmployeeIndex(cpf)];
        console.log(employee.getTotalMovedMoney());
    }
}
exports.default = EmployeeController;
