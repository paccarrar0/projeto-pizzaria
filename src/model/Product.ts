export default class Product{

  private size: number = 0;
  private name: string = "";
  private price: number = 0;

  public setSize(size: number): void{
    this.size = size;
  }

  public getSize(): number{
    return this.size;
  }

  public getName(): string{
    return this.name;
  }

  public getPrice(): number{
    return this.price;
  }

  public setName(name: string){
    this.name = name;
  }

  public setPrice(price: number){
    this.price = price;
  }
}