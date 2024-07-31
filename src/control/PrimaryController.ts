import PrimaryScreen from "../view/PrimaryScreen";
import PizzaController from "./PizzaController";

export default class PrimaryController{

    private primaryScreen: PrimaryScreen = new PrimaryScreen(new PizzaController());
    
    public startSystem():void {
       this.primaryScreen.getFirstScreen();
    }

}