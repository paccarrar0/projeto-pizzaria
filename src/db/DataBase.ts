import Client from "../model/Client";
import Pizza from "../model/Pizza";
import Soda from "../model/Soda";
import Employee from '../model/Employee';

export default class DataBase {

  private static instance: DataBase;
  private pizzaList: Pizza[] = [];
  private sodaList: Soda[] = [];
  private clientList: Client[] = [];
  private employeeList: Employee[] = [];

  private constructor() {}

  public static getInstance(): DataBase {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }

  public addPizza(pizza: Pizza): void{
    this.pizzaList.push(pizza);
  }

  public addSoda(soda: Soda): void{
    this.sodaList.push(soda);
  }

  public addClient(client: Client): void{
    this.clientList.push(client);
  }

  public addEmployee(employee: Employee){
    this.employeeList.push(employee);
  }

  public removePizza(name: string): boolean{
    const Index: number = this.pizzaList.findIndex(pizza => pizza.getName() === name)

    if(Index !== -1) {
      this.pizzaList.splice(Index, 1);
      return true;
    }
    return false;
  }

  public getEmployeeIndex(cpf: string){
    const Index: number = this.employeeList.findIndex(employee => employee.getCpf() === cpf);
    return Index;
  }

  public addSale(cpf: string, sale: number): void{
    this.employeeList[this.getEmployeeIndex(cpf)].setSale(sale);
  }

  public getClientIndex(cpf: string){
    const Index: number = this.clientList.findIndex(client => client.getCpf() === cpf);
    return Index;
  }

  public addOrder(cpf: string, order: number): void{
    this.clientList[this.getClientIndex(cpf)].setOrder(order)

  }

  public listPizza(): Pizza[]{
    return this.pizzaList;
  }

  public listSoda(): Soda[]{
    return this.sodaList;
  }

  public listClient(): Client[]{
    return this.clientList;
  }

  public listEmployee(): Employee[]{
    return this.employeeList;
  }
}