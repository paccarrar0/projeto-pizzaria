import Person from "./Person";

export default class Client extends Person{

  private orders: number = 0;

  public setOrders(orders: number): void{
    this.orders = orders;
  }

  public getOrders(): number{
    return this.orders;
  }
}