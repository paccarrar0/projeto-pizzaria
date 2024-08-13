"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const ManagePizza_1 = __importDefault(require("../view/ManagePizza"));
const ManageSoda_1 = __importDefault(require("../view/ManageSoda"));
const PizzaController_1 = __importDefault(require("./PizzaController"));
const SodaController_1 = __importDefault(require("./SodaController"));
const EmployeeController_1 = __importDefault(require("./EmployeeController"));
const ClientController_1 = __importDefault(require("./ClientController"));
const ManageEmployee_1 = __importDefault(require("../view/ManageEmployee"));
const ManageClient_1 = __importDefault(require("../view/ManageClient"));
class PrimaryController {
    constructor() {
        this.pizzaController = new PizzaController_1.default();
        this.sodaController = new SodaController_1.default();
        this.employeeController = new EmployeeController_1.default();
        this.clientController = new ClientController_1.default();
        const _ManagePizza = new ManagePizza_1.default(this.pizzaController);
        const _ManageSoda = new ManageSoda_1.default(this.sodaController);
        const _ManageEmployee = new ManageEmployee_1.default(this.employeeController);
        const _ManageClient = new ManageClient_1.default(this.clientController);
        this.primaryScreen = new PrimaryScreen_1.default(_ManagePizza, _ManageSoda, _ManageEmployee, _ManageClient, this.pizzaController, this.sodaController, this.employeeController, this.clientController);
    }
    startSystem() {
        this.primaryScreen.getFirstScreen();
    }
}
exports.default = PrimaryController;
