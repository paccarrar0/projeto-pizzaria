import Product from "./Product";

export default class Pizza extends Product{
  
  private flavor: string = "";
  private description: string = "";

  public setFlavor(flavor: string): void{
    this.flavor = flavor;
  }

  public setDescription(description: string): void{
    this.description = description;
  }

  public getFlavor(): string{
    return this.flavor;
  }

  public getDescription(): string{
    return this.description;
  }
}