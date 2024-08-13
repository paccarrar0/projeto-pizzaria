"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
var SodaType;
(function (SodaType) {
    SodaType["REGULAR"] = "1";
    SodaType["LIGHT"] = "2";
})(SodaType || (SodaType = {}));
class ManageSoda {
    constructor(_SodaController) {
        this.prompt = (0, prompt_sync_1.default)();
        this._SodaController = _SodaController;
    }
    registerSoda() {
        let name = this.prompt("Digite o nome do refrigerante: ");
        let size = this.prompt("Digite o tamanho do refrigerante: ");
        let price = Number(this.prompt("Digite o preço do refrigerante: "));
        let lightInput = this.prompt("O refrigerante é light ou regular?").toLowerCase();
        let sodaType = lightInput === "light" ? SodaType.LIGHT : SodaType.REGULAR;
        let light = sodaType === SodaType.LIGHT;
        this._SodaController.registerSoda(name, size, price, light);
    }
}
exports.default = ManageSoda;
