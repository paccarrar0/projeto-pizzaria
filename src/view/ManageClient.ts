import ClientController from "../control/ClientController";
import PromptSync from "prompt-sync";

export default class ManageClient {

  private _ClientController: ClientController;
  private prompt = PromptSync();

  constructor(_ClientController: ClientController){
    this._ClientController = _ClientController;
  }

  public registerClient(): void{
    let name: string = this.prompt("Insira o nome do cliente: ");
    let cpf: string = this.prompt("Insira o CPF do cliente: ");

    this._ClientController.registerClient(name, cpf);    
  }

  public registerOrder(): void{
    let cpf: string = this.prompt("Insira o CPF do cliente: ");
    let order: number = Number(this.prompt("Insira o valor da compra: ")); //Tratar entrada não numérica

    this._ClientController.setOrder(cpf, order);
  }

  public getMoneyMoved(){
    let cpf: string = this.prompt("Insira o cpf do cliente: ");

    this._ClientController.getMoneyMoved(cpf);
  }
}