import type { Config } from "../types/Config";
import { $ } from "../utils/querySelector";
import { sleep } from "../utils/sleep";

type Callback = (newConfig: Config) => void;

export class Command {
  config: Config;
  callback: Callback = () => {};
  isPlaying = false;

  constructor(config: Config) {
    this.config = config;

    this.render();
    this.setActions();
  }

  setActions() {
    const sampleSliderElt = $(".command .samples input", HTMLInputElement);
    sampleSliderElt.addEventListener("input", () => {
      this.config.samples = +sampleSliderElt.value;
      this.render();
      this.callback(this.config);
    });

    const mfSliderElt = $(
      ".command .multiplicationFactor input",
      HTMLInputElement
    );
    mfSliderElt.addEventListener("input", () => {
      this.config.multiplicationFactor = +mfSliderElt.value;
      this.render();
      this.callback(this.config);
    });

    $(".command .play").addEventListener("click", () => {
      this.isPlaying = !this.isPlaying;
      this.render();
      if (this.isPlaying) {
        this.startPlaying();
      }
    });
  }
  async startPlaying() {
    while (this.isPlaying) {
      await sleep(15);
      let mf = this.config.multiplicationFactor;
      mf += 0.01;
      mf %= 100;
      mf = +mf.toFixed(2);
      this.config.multiplicationFactor = mf;
      this.render();
      this.callback(this.config);
    }
  }

  render() {
    $(".command .samples .value").innerHTML = this.config.samples + "";
    $(".command .multiplicationFactor .value").innerHTML =
      this.config.multiplicationFactor + "";

    $(".command .samples input", HTMLInputElement).value =
      this.config.samples + "";
    $(".command .multiplicationFactor input", HTMLInputElement).value =
      this.config.multiplicationFactor + "";

    $(".command .play").innerHTML = this.isPlaying ? "Pause" : "Play";
  }

  onConfigChange(callback: Callback) {
    this.callback = callback;
  }
}
