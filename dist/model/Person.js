"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, cpf) {
        this.name = "";
        this.cpf = 0;
        this.name = name;
        this.cpf = cpf;
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
