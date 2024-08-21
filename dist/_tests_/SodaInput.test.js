"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Soda_1 = __importDefault(require("../model/Soda"));
let testSodaG = new Soda_1.default();
testSodaG.setSize("3L");
testSodaG.setPrice(10);
let testSoda = new Soda_1.default();
testSoda.setSize("2L");
testSoda.setPrice(10);
test("Teste da saída do preço do refrigerante grande", () => expect(testSodaG.getPrice()).toBe(9.5));
test("Teste da saída do preço do refrigerante de qualquer outro tamanho", () => expect(testSoda.getPrice()).toBe(10));
