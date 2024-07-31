export default class Person{

  private name: string = "";
  private cpf: number = 0;
  
  constructor(name: string, cpf: number){
    this.name = name;
    this.cpf = cpf;
  }

  public getName(): string{
    return this.name;
  }

  public getCpf(): number{
    return this.cpf;
  }

  public setName(name: string){
    this.name = name;
  }

  public setCpf(cpf: number){
    this.cpf = cpf;
  }
}