// Person.ts
import { IPerson } from '../interfaces/IPerson';

export default abstract class Person implements IPerson {
  private name: string = "";
  private cpf: string = "";

  public getName(): string {
    return this.name;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public abstract getTotalMovedMoney(): number;
}
