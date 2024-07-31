"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Employee extends Person_1.default {
    constructor() {
        super(...arguments);
        this.sector = "";
        this.sales = 0;
    }
    setSector(sector) {
        this.sector = sector;
    }
    getSector() {
        return this.sector;
    }
    setSales(sales) {
        this.sales = sales;
    }
    getSales() {
        return this.sales;
    }
}
exports.default = Employee;
