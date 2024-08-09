"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
// Enum para representar os tipos de refrigerante
var SodaType;
(function (SodaType) {
    SodaType["REGULAR"] = "regular";
    SodaType["LIGHT"] = "light";
})(SodaType || (SodaType = {}));
class RegisterSoda {
    constructor(_SodaController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._SodaController = _SodaController;
    }
    registerSoda() {
        let name = this.prompt("Digite o nome do refrigerante: ");
        let size = this.prompt("Digite o tamanho do refrigerante: ");
        let price = Number(this.prompt("Digite o preço do refrigerante: "));
        // Solicita o tipo de refrigerante ao usuário e converte para SodaType
        let lightInput = this.prompt("O refrigerante é light ou regular?").toLowerCase();
        // Usando o enum para determinar o tipo de soda
        let sodaType = lightInput === "light" ? SodaType.LIGHT : SodaType.REGULAR;
        // Converter o tipo de refrigerante para um valor booleano
        let light = sodaType === SodaType.LIGHT;
        this._SodaController.registerSoda(name, size, price, light);
    }
}
exports.default = RegisterSoda;
