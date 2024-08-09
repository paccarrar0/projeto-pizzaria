export default abstract class Person{

  private name: string = "";
  private cpf: string = "";

  public getName(): string{
    return this.name;
  }

  public getCpf(): string{
    return this.cpf;
  }

  public setName(name: string){
    this.name = name;
  }

  public setCpf(cpf: string){
    this.cpf = cpf;
  }
}