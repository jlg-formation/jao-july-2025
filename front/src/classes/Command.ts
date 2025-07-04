import type { Config } from "../types/Config";
import { $ } from "../utils/querySelector";

type Callback = (newConfig: Config) => void;

export class Command {
  config: Config;
  callback: Callback = () => {};

  constructor(config: Config) {
    this.config = config;

    this.render();
    this.setActions();
  }

  setActions() {
    const sampleSliderElt = $(".command .samples input") as HTMLInputElement;
    sampleSliderElt.addEventListener("input", () => {
      this.config.samples = +sampleSliderElt.value;
      this.render();
      this.callback(this.config);
    });

    const mfSliderElt = $(
      ".command .multiplicationFactor input"
    ) as HTMLInputElement;
    mfSliderElt.addEventListener("input", () => {
      this.config.multiplicationFactor = +mfSliderElt.value;
      this.render();
      this.callback(this.config);
    });
  }

  render() {
    $(".command .samples .value").innerHTML = this.config.samples + "";
    $(".command .multiplicationFactor .value").innerHTML =
      this.config.multiplicationFactor + "";

    ($(".command .samples input") as HTMLInputElement).value =
      this.config.samples + "";
    ($(".command .multiplicationFactor input") as HTMLInputElement).value =
      this.config.multiplicationFactor + "";
  }

  onConfigChange(callback: Callback) {
    this.callback = callback;
  }
}
