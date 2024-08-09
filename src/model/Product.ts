export default abstract class Product{

  private size: string = "";
  private name: string = "";
  private price: number = 0;

  public setSize(size: string): void{
    this.size = size;
  }

  public getSize(): string{
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