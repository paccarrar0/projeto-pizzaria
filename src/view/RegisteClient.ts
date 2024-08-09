import ClientController from "../control/ClientController";
import PromptSync from "prompt-sync";
import Client from '../model/Client';

export default class RegisterClient {

  private _ClientController: ClientController;
  private prompt = PromptSync();

  constructor(_ClientController: ClientController){
    this._ClientController = _ClientController;
  }

  public registerClient(): void{
    let name: string = this.prompt("Insira o nome do cliente:\n");
    let cpf: string = this.prompt("Insira o CPF do cliente:\n");

    this._ClientController.registerClient(name, cpf);    
  }
}