import Soda from "../model/Soda";
import PrimaryScreen from "../view/PrimaryScreen";
import ManagePizza from "../view/ManagePizza";
import ManageSoda from "../view/ManageSoda";
import PizzaController from "./PizzaController";
import SodaController from "./SodaController";
import EmployeeController from "./EmployeeController";
import ClientController from "./ClientController";
import ManageEmployee from "../view/ManageEmployee";
import ManageClient from "../view/ManageClient";

export default class PrimaryController {
  private pizzaController: PizzaController;
  private sodaController: SodaController;
  private employeeController: EmployeeController;
  private clientController: ClientController;
  private primaryScreen: PrimaryScreen;

  constructor() {
    this.pizzaController = new PizzaController();
    this.sodaController = new SodaController();
    this.employeeController = new EmployeeController();
    this.clientController = new ClientController();
    
    const _ManagePizza = new ManagePizza(this.pizzaController);
    const _ManageSoda = new ManageSoda(this.sodaController);
    const _ManageEmployee = new ManageEmployee(this.employeeController);
    const _ManageClient = new ManageClient(this.clientController);

    this.primaryScreen = new PrimaryScreen(
      _ManagePizza,
      _ManageSoda,
      _ManageEmployee,
      _ManageClient,
      this.pizzaController,
      this.sodaController,
      this.employeeController,
      this.clientController
    );
  }

  public startSystem(): void {
    this.primaryScreen.getFirstScreen();
  }
}
