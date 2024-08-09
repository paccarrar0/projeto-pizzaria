import DataBase from "../db/DataBase";
import Client from "../model/Client";

export default class ClientController {

  private dataBase: DataBase = DataBase.getInstance();
  
  public showClient(): Client[]{
    return this.dataBase.listClient();
  }

  public registerClient(name: string, cpf: string): void{
    let client: Client = new Client()
    client.setName(name);
    client.setCpf(cpf);
    
    this.dataBase.addClient(client);
  }
}