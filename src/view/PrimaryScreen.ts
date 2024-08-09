import RegisterPizza from "./RegisterPizza";
import PizzaController from "../control/PizzaController";
import RegisterSoda from "./RegisterSoda";
import promptSync from "prompt-sync";
import SodaController from '../control/SodaController';

export default class PrimaryScreen{

  private sodaController: SodaController;
  private pizzaController: PizzaController;
  private _RegisterPizza: RegisterPizza;
  private _RegisterSoda: RegisterSoda;

  constructor(pizzaController: PizzaController, _RegisterPizza: RegisterPizza, _RegisterSoda: RegisterSoda, sodaController: SodaController){
    this.pizzaController = pizzaController;
    this._RegisterPizza = _RegisterPizza;
    this._RegisterSoda = _RegisterSoda;
    this.sodaController = sodaController;
  }
    private prompt = promptSync();

    public getFirstScreen():void {
        
       
          let showScreen: boolean = false;
          while (!showScreen) {
              
              let choice = this.prompt("Escolha:\n1 - Cadastro Pizza\n2 - Cadastro Refri\n3 - Cadastro Cliente\n4 - Cadastro Funcionário\n5 - Listar\n6 - Sair\n");
              
              switch (choice) {
                case "1":
                  this._RegisterPizza.registerPizza();
                  break;
        
                case "2":
                  
                  this._RegisterSoda.registerSoda();
                
                  break;

                case "5":
                  console.log(this.pizzaController.showPizza(), this.sodaController.showSoda());
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