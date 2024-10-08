"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class Soda extends Product_1.default {
    constructor() {
        super(...arguments);
        this.light = false;
    }
    setLight(light) {
        this.light = light;
    }
    getLight() {
        return this.light;
    }
    setPrice(price) {
        let finalPrice = price;
        if (this.getSize() == "3L") {
            finalPrice = price - (price * 0.05);
        }
        super.setPrice(finalPrice);
    }
}
exports.default = Soda;
