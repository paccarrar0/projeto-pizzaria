import Product from "./Product";

export default class Soda extends Product{

  private light: boolean = false;

  public setLight(light: boolean): void{
    this.light = light;
  }

  public getLight(): boolean{
    return this.light;
  }
}