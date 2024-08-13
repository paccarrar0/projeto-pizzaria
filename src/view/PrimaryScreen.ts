import ManagePizza from "./ManagePizza";
import PizzaController from "../control/PizzaController";
import ManageSoda from "./ManageSoda";
import promptSync from "prompt-sync";
import SodaController from "../control/SodaController";
import ManageProduct from "./ManageProduct";
import ClientController from "../control/ClientController";
import EmployeeController from "../control/EmployeeController";
import ManageClient from "./ManageClient";
import ManageEmployee from "./ManageEmployee";
import ManagePerson from "./ManagePerson";

export default class PrimaryScreen {
  private sodaController: SodaController;
  private pizzaController: PizzaController;
  private clientController: ClientController;
  private employeeController: EmployeeController;
  private _ManagePizza: ManagePizza;
  private _ManageSoda: ManageSoda;
  private _ManageClient: ManageClient;
  private _ManageEmployee: ManageEmployee;

  constructor(
    _ManagePizza: ManagePizza,
    _ManageSoda: ManageSoda,
    _ManageEmployee: ManageEmployee,
    _ManageClient: ManageClient,
    pizzaController: PizzaController,
    sodaController: SodaController,
    employeeController: EmployeeController,
    clientController: ClientController
  ) {
    this._ManagePizza = _ManagePizza;
    this._ManageSoda = _ManageSoda;
    this._ManageEmployee = _ManageEmployee;
    this._ManageClient = _ManageClient;
    this.pizzaController = pizzaController;
    this.sodaController = sodaController;
    this.employeeController = employeeController;
    this.clientController = clientController;
  }
  private prompt = promptSync();

  public getFirstScreen(): void {
    let _ManageProduct: ManageProduct = new ManageProduct(
      this.pizzaController,
      this._ManagePizza,
      this._ManageSoda,
      this.sodaController
    );

    let _ManagePerson: ManagePerson = new ManagePerson(
      this._ManageClient,
      this._ManageEmployee,
      this.employeeController,
      this.clientController
    );

    let showScreen: boolean = false;
    while (!showScreen) {
      let choice = this.prompt(
        "Escolha:\n1 - Gerenciar Produtos\n2 - Gerenciar Pessoas\n3 - Sair\n"
      );

      switch (choice) {
        case "1":
          console.clear();
          _ManageProduct.manageProductScreen();
          break;

        case "2":
          console.clear();
          _ManagePerson.managePersonScreen();
          break;

        case "3":
          showScreen = true;
          break;

        default:
          console.log("Invalid answer!");
      }
    }
  }
}
