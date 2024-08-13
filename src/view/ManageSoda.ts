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
    let name: string = this.prompt("Digite o nome do refrigerante: ");
    let size: string = this.prompt("Digite o tamanho do refrigerante: ");
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
