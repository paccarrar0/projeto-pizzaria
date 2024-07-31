import Product from "./Product";

export default class Soda extends Product{

  private zero: boolean = false;
  private brand: string = "";

  public setBrand(brand: string): void{
    this.brand = brand;
  }

  public getBrand(): string{
    return this.brand;
  }

  public setZero(zero: boolean): void{
    this.zero = zero;
  }

  public getZero(): boolean{
    return this.zero;
  }
}