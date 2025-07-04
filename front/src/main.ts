import "./style.css";

import { Board } from "./classes/Board";

const board = new Board();
board.setConfig({
  samples: 10,
  multiplicationFactor: 2,
});
board.draw();
