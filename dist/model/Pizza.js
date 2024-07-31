"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("./Product"));
class Pizza extends Product_1.default {
    constructor() {
        super(...arguments);
        this.flavor = "";
        this.description = "";
    }
    setFlavor(flavor) {
        this.flavor = flavor;
    }
    setDescription(description) {
        this.description = description;
    }
    getFlavor() {
        return this.flavor;
    }
    getDescription() {
        return this.description;
    }
}
exports.default = Pizza;
