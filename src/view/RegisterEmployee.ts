import EmployeeController from "../control/EmployeeController";
import PromptSync from "prompt-sync";

export default class RegisterEmployee {

  private _EmployeeController: EmployeeController;
  private prompt = PromptSync();

  constructor(_EmployeeController: EmployeeController){
    this._EmployeeController = _EmployeeController;
  }
  
  public registerEmployee(): void{
    let name: string = this.prompt("Insira o nome do funcionário:\n");
    let cpf: string = this.prompt("Insira o CPF do funcionário:\n");
    let sector: string = this.prompt("Insira o setor do funcionário:\n");

    this._EmployeeController.registerEmployee(name, cpf, sector);
  }
}