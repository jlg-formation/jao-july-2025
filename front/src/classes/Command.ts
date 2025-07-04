import type { Config } from "../types/Config";
import { $ } from "../utils/querySelector";

type Callback = (newConfig: Config) => void;

export class Command {
  config: Config;
  callback: Callback = () => {};

  constructor(config: Config) {
    this.config = config;

    this.render();
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
