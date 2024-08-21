import Product from "../model/Product";
import Soda from "../model/Soda";

let testSodaG: Soda = new Soda();
testSodaG.setSize("3L");
testSodaG.setPrice(10);


let testSoda: Soda = new Soda();
testSoda.setSize("2L");
testSoda.setPrice(10);


test("Teste da saída do preço do refrigerante grande", () => 
  expect(testSodaG.getPrice()).toBe(9.5));

test("Teste da saída do preço do refrigerante de qualquer outro tamanho", () =>
  expect(testSoda.getPrice()).toBe(10));