"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = __importDefault(require("../db/DataBase"));
class SodaController {
    constructor() {
        this.dataBase = new DataBase_1.default;
        //...
    }
}
exports.default = SodaController;
