import DataBase from "../db/DataBase";
import Pizza from "../model/Pizza";

export default class PizzaController{

  private dataBase: DataBase = new DataBase;

  public getNewPizza(): Pizza{
    return new Pizza();
  }

  public setNewPizza(pizza: Pizza): void{
    this.dataBase.addPizza(pizza);
  }
  
  public showPizza(): Pizza[]{
    return this.dataBase.listPizza();
  }
}