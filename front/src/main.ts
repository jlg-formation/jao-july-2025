import "./style.css";

import { Board } from "./classes/Board";
import { Command } from "./classes/Command";
import type { Config } from "./types/Config";

const config: Config = {
  samples: 10,
  multiplicationFactor: 2,
};

const board = new Board();
board.setConfig(config);
board.draw();

const command = new Command(config);
command.onConfigChange((newConfig) => {
  board.setConfig(newConfig);
  board.redraw();
});
