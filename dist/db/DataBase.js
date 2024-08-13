"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataBase {
    constructor() {
        this.pizzaList = [];
        this.sodaList = [];
        this.clientList = [];
        this.employeeList = [];
    }
    static getInstance() {
        if (!DataBase.instance) {
            DataBase.instance = new DataBase();
        }
        return DataBase.instance;
    }
    addPizza(pizza) {
        this.pizzaList.push(pizza);
    }
    addSoda(soda) {
        this.sodaList.push(soda);
    }
    addClient(client) {
        this.clientList.push(client);
    }
    addEmployee(employee) {
        this.employeeList.push(employee);
    }
    removePizza(name) {
        const Index = this.pizzaList.findIndex(pizza => pizza.getName() === name);
        if (Index !== -1) {
            this.pizzaList.splice(Index, 1);
            return true;
        }
        return false;
    }
    getEmployeeIndex(cpf) {
        const Index = this.employeeList.findIndex(employee => employee.getCpf() === cpf);
        return Index;
    }
    addSale(cpf, sale) {
        this.employeeList[this.getEmployeeIndex(cpf)].setSale(sale);
    }
    getClientIndex(cpf) {
        const Index = this.clientList.findIndex(client => client.getCpf() === cpf);
        return Index;
    }
    addOrder(cpf, order) {
        this.clientList[this.getClientIndex(cpf)].setOrder(order);
    }
    listPizza() {
        return this.pizzaList;
    }
    listSoda() {
        return this.sodaList;
    }
    listClient() {
        return this.clientList;
    }
    listEmployee() {
        return this.employeeList;
    }
}
exports.default = DataBase;
