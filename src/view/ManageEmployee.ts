import EmployeeController from "../control/EmployeeController";
import PromptSync from "prompt-sync";

export default class ManageEmployee {

  private _EmployeeController: EmployeeController;
  private prompt = PromptSync();

  constructor(_EmployeeController: EmployeeController){
    this._EmployeeController = _EmployeeController;
  }
  
  public registerEmployee(): void{
    let name: string = this.prompt("Insira o nome do funcionário: ");
    let cpf: string = this.prompt("Insira o CPF do funcionário: ");
    let sector: string = this.prompt("Insira o setor do funcionário: ");

    this._EmployeeController.registerEmployee(name, cpf, sector);
  }

  public registerSale(): void{
    let employee: string = this.prompt("Insira o CPF do funcionário: ");
    let sale: number = Number(this.prompt("Insira o valor da venda: ")); //Tratar a entrada de não números

    this._EmployeeController.setSale(employee, sale);
  }

  public getMoneyMoved(){
    let cpf: string = this.prompt("Insira o cpf do funcionário: ");

    this._EmployeeController.getMoneyMoved(cpf);
  }
}