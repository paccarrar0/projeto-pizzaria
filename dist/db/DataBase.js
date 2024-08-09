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
