import ClientController from "../control/ClientController";
import PromptSync from "prompt-sync";

export default class ManageClient {
  private _ClientController: ClientController;
  private prompt = PromptSync();

  constructor(_ClientController: ClientController) {
    this._ClientController = _ClientController;
  }

  public registerClient(): void {
    let name: string = this.prompt("Insira o nome do cliente: ");
    let cpf: string = this.prompt("Insira o CPF do cliente: ");

    this._ClientController.registerClient(name, cpf);
  }

  public registerOrder(): void {
    let cpf: string = this.prompt("Insira o CPF do cliente: ");
    let order: number;

    try {
      let orderInput: string = this.prompt("Insira o valor da compra: ");
      order = Number(orderInput);

      if (isNaN(order)) {
        throw new Error("Valor inserido não é numérico.");
      }

      this._ClientController.setOrder(cpf, order);
    } catch (error) {
      if (error instanceof Error) {
        console.error("Erro: " + error.message);
      } else {
        console.error("Erro desconhecido: ", error);
      }
      console.log("Por favor, insira um valor numérico válido.");
    }
  }

  public getMoneyMoved() {
    let cpf: string = this.prompt("Insira o cpf do cliente: ");

    console.log(this._ClientController.getMoneyMoved(cpf));
  }
}
