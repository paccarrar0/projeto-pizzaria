
import Person from "./Person";

export default class Client extends Person {
  private orders: number[] = [];

  public setOrder(value: number): void {
    this.orders.push(value);
  }

  public getOrders(): number[] {
    return this.orders;
  }

  public getTotalMovedMoney(): number {
    const sum: number = this.orders.reduce((total, order) => total + order, 0);
    return sum;
  }

  public getRole(): string {
    return "Client";
  }
}
