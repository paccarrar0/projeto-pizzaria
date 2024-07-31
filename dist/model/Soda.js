"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class Soda extends Product_1.default {
    constructor() {
        super(...arguments);
        this.zero = false;
        this.brand = "";
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getBrand() {
        return this.brand;
    }
    setZero(zero) {
        this.zero = zero;
    }
    getZero() {
        return this.zero;
    }
}
exports.default = Soda;
