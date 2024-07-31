import Person from "./Person";

export default class Employee extends Person{

  private sector: string = "";
  private sales: number = 0;

  public setSector(sector: string): void{
    this.sector = sector;
  }

  public getSector(): string{
    return this.sector;
  }

  public setSales(sales: number): void{
    this.sales = sales;
  }

  public getSales(): number{
    return this.sales;
  }
}