"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Soda_1 = __importDefault(require("../model/Soda"));
const DataBase_1 = __importDefault(require("../db/DataBase"));
class SodaController {
    constructor() {
        this.dataBase = DataBase_1.default.getInstance();
    }
    registerSoda(name, size, price, light) {
        let soda = new Soda_1.default();
        soda.setName(name);
        soda.setSize(size);
        soda.setPrice(price);
        soda.setLight(light);
        this.dataBase.addSoda(soda);
    }
    showSoda() {
        return this.dataBase.listSoda();
    }
}
exports.default = SodaController;
