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
        let size = "";
        let name = this.prompt("Digite o nome do refrigerante: ");
        let choice = this.prompt("Escolha o tamanho do refrigerante:\n1 - Lata\n2 - 1L\n3 - 2L\n4 - 3L\n5 - 650ML");
        switch (choice) {
            case "1":
                size = "350ML";
                break;
            case "2":
                size = "1L";
                break;
            case "3":
                size = "2L";
                break;
            case "4":
                size = "3L";
                break;
            case "5":
                size = "650ML";
                break;
            default:
                console.log("Selecione uma opção válida!");
        }
        let price = Number(this.prompt("Digite o preço do refrigerante: "));
        let lightInput = this.prompt("O refrigerante é light ou regular?").toLowerCase();
        let sodaType = lightInput === "light" ? SodaType.LIGHT : SodaType.REGULAR;
        let light = sodaType === SodaType.LIGHT;
        this._SodaController.registerSoda(name, size, price, light);
    }
}
exports.default = ManageSoda;
