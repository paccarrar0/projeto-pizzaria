import Soda from "../model/Soda";
import DataBase from "../db/DataBase";

export default class SodaController{

  private dataBase: DataBase = DataBase.getInstance();

  public registerSoda(name: string, size: string, price: number, light: boolean): void{
    let soda: Soda = new Soda()
    soda.setName(name);
    soda.setSize(size);
    soda.setPrice(price);
    soda.setLight(light);
    
    this.dataBase.addSoda(soda);
  }

  public showSoda(): Soda[]{
    return this.dataBase.listSoda();
  }
}