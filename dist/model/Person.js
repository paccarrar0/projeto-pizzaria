"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor() {
        this.name = "";
        this.cpf = "";
    }
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    setName(name) {
        this.name = name;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
}
exports.default = Person;
