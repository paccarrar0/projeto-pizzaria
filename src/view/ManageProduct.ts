import PizzaController from "../control/PizzaController";
import ManagePizza from "./ManagePizza";
import SodaController from "../control/SodaController";
import ManageSoda from "./ManageSoda";
import PromptSync from "prompt-sync";

export default class ManageProduct {
  private pizzaController: PizzaController;
  private _ManagePizza: ManagePizza;
  private _ManageSoda: ManageSoda;
  private sodaController: SodaController;
  private prompt = PromptSync();

  constructor(
    pizzaController: PizzaController,
    _ManagePizza: ManagePizza,
    _ManageSoda: ManageSoda,
    sodaController: SodaController
  ) {
    this.pizzaController = pizzaController;
    this._ManagePizza = _ManagePizza;
    this._ManageSoda = _ManageSoda;
    this.sodaController = sodaController;
  }

  public manageProductScreen(): void {
    let showScreen: boolean = false;
    while (!showScreen) {
      let choice = this.prompt(
        "Escolha:\n1 - Cadastro Pizza\n2 - Cadastro Refri\n3 - Excluir Pizza\n4 - Excluir Refri\n5 - Listar\n6 - Sair\n"
      );

      switch (choice) {
        case "1":
          console.clear()
          this._ManagePizza.registerPizza();
          break;

        case "2":
          console.clear()
          this._ManageSoda.registerSoda();
          break;

        case "3":console.clear()
          console.clear()
          this._ManagePizza.removePizza()
          break;

        case "4":

        case "5":
          console.clear()
          console.log(
            this.pizzaController.showPizza(),
            this.sodaController.showSoda()
          );
          break;
          
        case "6":
          showScreen = true;
          break;

        default:
          console.log("Invalid answer!");
      }
    }
  }
}
