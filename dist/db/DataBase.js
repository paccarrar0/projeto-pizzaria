"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataBase {
    constructor() {
        this.pizzaList = [];
        this.sodaList = [];
    }
    addPizza(pizza) {
        this.pizzaList.push(pizza);
    }
    addSoda(soda) {
        this.sodaList.push(soda);
    }
    listPizza() {
        return this.pizzaList;
    }
}
exports.default = DataBase;
