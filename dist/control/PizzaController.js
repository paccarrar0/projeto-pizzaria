"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = __importDefault(require("../db/DataBase"));
const Pizza_1 = __importDefault(require("../model/Pizza"));
class PizzaController {
    constructor() {
        this.dataBase = new DataBase_1.default;
    }
    getNewPizza() {
        return new Pizza_1.default();
    }
    setNewPizza(pizza) {
        this.dataBase.addPizza(pizza);
    }
    showPizza() {
        return this.dataBase.listPizza();
    }
}
exports.default = PizzaController;
