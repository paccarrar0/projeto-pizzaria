import EmployeeController from "../control/EmployeeController";
import PromptSync from "prompt-sync";

export default class ManageEmployee {
  private _EmployeeController: EmployeeController;
  private prompt = PromptSync();

  constructor(_EmployeeController: EmployeeController) {
    this._EmployeeController = _EmployeeController;
  }

  public registerEmployee(): void {
    let name: string = this.prompt("Insira o nome do funcionário: ");
    let cpf: string = this.prompt("Insira o CPF do funcionário: ");
    let sector: string = this.prompt("Insira o setor do funcionário: ");

    this._EmployeeController.registerEmployee(name, cpf, sector);
  }

  public registerSale(): void {
    let employee: string = this.prompt("Insira o CPF do funcionário: ");
    let sale: number;

    try {
      let saleInput: string = this.prompt("Insira o valor da venda: ");
      sale = Number(saleInput);

      if (isNaN(sale)) {
        throw new Error("Valor inserido não é numérico.");
      }

      this._EmployeeController.setSale(employee, sale);
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
    let cpf: string = this.prompt("Insira o cpf do funcionário: ");

    console.log(this._EmployeeController.getMoneyMoved(cpf));
  }
}
