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
        this.sales = [];
    }
    setSector(sector) {
        this.sector = sector;
    }
    getSector() {
        return this.sector;
    }
    setSale(value) {
        this.sales.push(value);
    }
    getSales() {
        return this.sales;
    }
    getTotalMovedMoney() {
        const sum = this.sales.reduce((total, sale) => total + sale, 0);
        return sum;
    }
    getRole() {
        return "Employee";
    }
}
exports.default = Employee;
