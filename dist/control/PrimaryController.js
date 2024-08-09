"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const RegisterPizza_1 = __importDefault(require("../view/RegisterPizza"));
const RegisterSoda_1 = __importDefault(require("../view/RegisterSoda"));
const PizzaController_1 = __importDefault(require("./PizzaController"));
const SodaController_1 = __importDefault(require("./SodaController"));
class PrimaryController {
    constructor() {
        this.pizzaController = new PizzaController_1.default();
        this.sodaController = new SodaController_1.default();
        const registerPizza = new RegisterPizza_1.default(this.pizzaController);
        const registerSoda = new RegisterSoda_1.default(this.sodaController);
        this.primaryScreen = new PrimaryScreen_1.default(this.pizzaController, registerPizza, registerSoda, this.sodaController);
    }
    startSystem() {
        this.primaryScreen.getFirstScreen();
    }
}
exports.default = PrimaryController;
