import SodaController from "../control/SodaController";
import PromptSync from "prompt-sync";

enum SodaType {
  REGULAR = "1",
  LIGHT = "2",
}

export default class ManageSoda {
  private _SodaController: SodaController;
  private prompt = PromptSync();

  constructor(_SodaController: SodaController) {
    this._SodaController = _SodaController;
  }

  public registerSoda(): void {
    let size: string = "";
    let name: string = this.prompt("Digite o nome do refrigerante: ");

    let choice = this.prompt(
      "Escolha o tamanho do refrigerante:\n1 - Lata\n2 - 1L\n3 - 2L\n4 - 3L\n5 - 650ML"
    );

    switch(choice){
      case "1":
        size = "350ML";
        break;
      case "2":
        size = "1L";
        break;
      case "3":
        size = "2L";
        break;
      case "4":
        size = "3L";
        break;
      case "5":
        size = "650ML";
        break;
      default:
        console.log("Selecione uma opção válida!");
    }

    let price: number = Number(this.prompt("Digite o preço do refrigerante: "));

    let lightInput: string = this.prompt(
      "O refrigerante é light ou regular?"
    ).toLowerCase();

    let sodaType: SodaType =
      lightInput === "light" ? SodaType.LIGHT : SodaType.REGULAR;

    let light: boolean = sodaType === SodaType.LIGHT;

    this._SodaController.registerSoda(name, size, price, light);
  }
}
