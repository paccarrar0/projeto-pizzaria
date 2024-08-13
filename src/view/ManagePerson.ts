import PromptSync from "prompt-sync";
import EmployeeController from "../control/EmployeeController";
import ManageClient from "./ManageClient";
import ManageEmployee from "./ManageEmployee";
import ClientController from "../control/ClientController";

export default class ManagePerson {
  private employeeController: EmployeeController;
  private _ManageClient: ManageClient;
  private _ManageEmployee: ManageEmployee;
  private clientController: ClientController;
  private prompt = PromptSync();

  constructor(
    _ManageClient: ManageClient,
    _ManageEmployee: ManageEmployee,
    employeeController: EmployeeController,
    clientController: ClientController
  ) {
    this.employeeController = employeeController;
    this._ManageClient = _ManageClient;
    this._ManageEmployee = _ManageEmployee;
    this.clientController = clientController;
  }
  public managePersonScreen(): void {
    let showScreen: boolean = false;
    while (!showScreen) {
      let choice = this.prompt(
        "Escolha:\n1 - Cadastro Funcionário\n2 - Cadastro Cliente\n3 - Adicionar Venda\n4 - Adicionar Compra\n5 - Listar total movido por cliente\n6 - Listar total movido por funcionario\n7 - Listar\n8 - Sair"
      );

      switch (choice) {
        case "1":
          console.clear();
          this._ManageEmployee.registerEmployee();
          break;

        case "2":
          console.clear();
          this._ManageClient.registerClient();
          break;

        case "3":
          console.clear();
          this._ManageEmployee.registerSale();
          break;

        case "4":
          console.clear();
          this._ManageClient.registerOrder();
          break;

        case "5":
          console.clear();
          this._ManageClient.getMoneyMoved();
          break;

        case "6":
          console.clear();
          this._ManageEmployee.getMoneyMoved();
          break;

        case "7":
          console.clear();
          console.log(
            this.employeeController.showEmployee(),
            this.clientController.showClient()
          );
          break;

        case "8":
          showScreen = true;
          break;

        default:
          console.log("Invalid answer!");
      }
    }
  }
}
