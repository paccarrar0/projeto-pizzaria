import SodaController from "../control/SodaController";
import PromptSync from "prompt-sync";

// Enum para representar os tipos de refrigerante
enum SodaType {
  REGULAR = "regular",
  LIGHT = "light",
}

export default class RegisterSoda { 

  private _SodaController: SodaController;
  private prompt = PromptSync();

  constructor(_SodaController: SodaController){
    this._SodaController = _SodaController;
  }

  public registerSoda(): void {
    let name: string = this.prompt("Digite o nome do refrigerante: ");
    let size: string = this.prompt("Digite o tamanho do refrigerante: ");
    let price: number = Number(this.prompt("Digite o preço do refrigerante: "));
    
    // Solicita o tipo de refrigerante ao usuário e converte para SodaType
    let lightInput: string = this.prompt("O refrigerante é light ou regular?").toLowerCase();
    
    // Usando o enum para determinar o tipo de soda
    let sodaType: SodaType = lightInput === "light" ? SodaType.LIGHT : SodaType.REGULAR;
    
    // Converter o tipo de refrigerante para um valor booleano
    let light: boolean = sodaType === SodaType.LIGHT;

    this._SodaController.registerSoda(name, size, price, light);
  }
}
