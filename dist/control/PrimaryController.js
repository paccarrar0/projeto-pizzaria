"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const PizzaController_1 = __importDefault(require("./PizzaController"));
class PrimaryController {
    constructor() {
        this.primaryScreen = new PrimaryScreen_1.default(new PizzaController_1.default());
    }
    startSystem() {
        this.primaryScreen.getFirstScreen();
    }
}
exports.default = PrimaryController;
