
import Person from "./Person";

export default class Employee extends Person {
  private sector: string = "";
  private sales: number[] = [];

  public setSector(sector: string): void {
    this.sector = sector;
  }

  public getSector(): string {
    return this.sector;
  }

  public setSale(value: number): void {
    this.sales.push(value);
  }

  public getSales(): number[] {
    return this.sales;
  }

  public getTotalMovedMoney(): number {
    const sum = this.sales.reduce((total, sale) => total + sale, 0);
    return sum;
  }

  public getRole(): string {
    return "Employee";
  }
}
