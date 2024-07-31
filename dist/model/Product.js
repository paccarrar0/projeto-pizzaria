"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor() {
        this.size = 0;
        this.name = "";
        this.price = 0;
    }
    setSize(size) {
        this.size = size;
    }
    getSize() {
        return this.size;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
}
exports.default = Product;
