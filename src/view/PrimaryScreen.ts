import PizzaController from "../control/PizzaController";
import Pizza from "../model/Pizza";
import promptSync from "prompt-sync";


export default class PrimaryScreen{

  private pizzaController: PizzaController;

  constructor(pizzaController: PizzaController){
    this.pizzaController = pizzaController;
  }
    private prompt = promptSync();

    public getFirstScreen():void {
        
       
          let showScreen: boolean = false;
          while (!showScreen) {
              // Get user input
              //console.clear();
              let choice = this.prompt("Escolha:\n1 - Cadastro Pizza\n2 - Listar\n3 - Sair");
              
              switch (choice) {
                case "1":
                  //aqui pedimos uma instancia de FoodProduct para o controller
                  let pizza: Pizza = this.pizzaController.getNewPizza();
                  this.registerFood(pizza);
                  break;
        
                case "2":
                  //console.clear();
                  console.log(this.pizzaController.showPizza());
                
                  break;
                case "3":
                    showScreen = true;
                  break;
                default:
                  //console.clear();
                  console.log("Invalid answer!");
              }
            }
      

    }

    public registerFood(pizza: Pizza): void{
      let name = this.prompt("Digite o nome da pizza");
      pizza.setName(name);
      //aqui requisito para o controller o registro da comida no BD
      this.pizzaController.setNewPizza(pizza);
      //this.pizzaController.listAllFoods();
    }

}