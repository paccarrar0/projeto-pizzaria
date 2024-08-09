import Soda from "../model/Soda";
import PrimaryScreen from "../view/PrimaryScreen";
import RegisterPizza from "../view/RegisterPizza";
import RegisterSoda from "../view/RegisterSoda";
import PizzaController from "./PizzaController";
import SodaController from './SodaController';

export default class PrimaryController {

    private sodaController: SodaController;
    private pizzaController: PizzaController;
    private primaryScreen: PrimaryScreen;

    constructor() {
        this.pizzaController = new PizzaController();
        this.sodaController = new SodaController();
        const registerPizza = new RegisterPizza(this.pizzaController);
        const registerSoda = new RegisterSoda(this.sodaController)
        this.primaryScreen = new PrimaryScreen(this.pizzaController, registerPizza, registerSoda, this.sodaController);
    }

    public startSystem(): void {
        this.primaryScreen.getFirstScreen();
    }

    
}
