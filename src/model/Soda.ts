import Product from "./Product";

export default class Soda extends Product{

  private light: boolean = false;

  public setLight(light: boolean): void{
    this.light = light;
  }

  public getLight(): boolean{
    return this.light;
  }

  public setPrice(price: number): void {
    let finalPrice: number = price;

    if(this.getSize() == "3L"){
      finalPrice = price - (price * 0.05);
    }
    super.setPrice(finalPrice);
  }
}