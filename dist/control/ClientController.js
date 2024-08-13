"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataBase_1 = __importDefault(require("../db/DataBase"));
const Client_1 = __importDefault(require("../model/Client"));
class ClientController {
    constructor() {
        this.dataBase = DataBase_1.default.getInstance();
    }
    showClient() {
        return this.dataBase.listClient();
    }
    registerClient(name, cpf) {
        let client = new Client_1.default();
        client.setName(name);
        client.setCpf(cpf);
        this.dataBase.addClient(client);
    }
    setOrder(cpf, order) {
        this.dataBase.addOrder(cpf, order);
    }
    getMoneyMoved(cpf) {
        let clients = this.dataBase.listClient();
        let client = clients[this.dataBase.getClientIndex(cpf)];
        console.log(client.getTotalMovedMoney());
    }
}
exports.default = ClientController;
