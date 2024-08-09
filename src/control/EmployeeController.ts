import DataBase from "../db/DataBase";
import Employee from "../model/Employee";

export default class EmployeeController {

  private dataBase: DataBase = DataBase.getInstance();
  
  public showEmployee(): Employee[]{
    return this.dataBase.listEmployee();
  }

  public registerEmployee(name: string, cpf: string, sector: string){
    let employee: Employee = new Employee();
    employee.setName(name);
    employee.setCpf(cpf);
    employee.setSector(sector);

    this.dataBase.addEmployee(employee);
  }
}