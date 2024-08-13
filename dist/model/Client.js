"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
class Client extends Person_1.default {
    constructor() {
        super(...arguments);
        this.orders = [];
    }
    setOrder(value) {
        this.orders.push(value);
    }
    getOrders() {
        return this.orders;
    }
    getTotalMovedMoney() {
        const sum = this.orders.reduce((total, order) => total + order, 0);
        return sum;
    }
    getRole() {
        return "Client";
    }
}
exports.default = Client;
