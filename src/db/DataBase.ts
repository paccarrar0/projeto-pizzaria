import Pizza from "../model/Pizza";
import Soda from "../model/Soda";

export default class DataBase {

  private pizzaList: Pizza[] = [];
  private sodaList: Soda[] = [];

  public addPizza(pizza: Pizza): void{
    this.pizzaList.push(pizza);
  }

  public addSoda(soda: Soda): void{
    this.sodaList.push(soda);
  }

  public listPizza(): Pizza[]{
    return this.pizzaList;
  }
}