"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = __importDefault(require("../db/DataBase"));
const Pizza_1 = __importDefault(require("../model/Pizza"));
class PizzaController {
    constructor() {
        this.dataBase = DataBase_1.default.getInstance();
    }
    showPizza() {
        return this.dataBase.listPizza();
    }
    registerPizza(name, size, price, ingredients, description) {
        let pizza = new Pizza_1.default();
        pizza.setName(name);
        pizza.setSize(size);
        pizza.setPrice(price);
        pizza.setIngredients(ingredients);
        if (description == "") {
            pizza.setDescription("Não informado");
        }
        else {
            pizza.setDescription(String(description));
        }
        this.dataBase.addPizza(pizza);
    }
}
exports.default = PizzaController;
