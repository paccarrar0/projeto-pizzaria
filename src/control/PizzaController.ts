import DataBase from "../db/DataBase";
import Pizza from "../model/Pizza";

export default class PizzaController{

  private dataBase: DataBase = DataBase.getInstance();
  
  public showPizza(): Pizza[]{
    return this.dataBase.listPizza  ();
  }

  public registerPizza(name: string, size: string, price: number, ingredients: string[], description?: string): void{
    let pizza: Pizza = new Pizza()
    pizza.setName(name);
    pizza.setSize(size);
    pizza.setPrice(price);
    pizza.setIngredients(ingredients)

    if(description == ""){
      pizza.setDescription("Não informado");
    }else{
      pizza.setDescription(String(description));
    }
    
    this.dataBase.addPizza(pizza);
  }
}