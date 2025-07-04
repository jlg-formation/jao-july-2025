import { offset, svgns, r0, container, lineContainer } from "../constant";
import type { Config } from "../types/Config";
import { getAngle, getPointOnCircle } from "../utils/math";
import { setAttrNbr } from "../utils/setAttrNbr";

export class Board {
  config: Config = {
    samples: 0,
    multiplicationFactor: 0,
  };

  setConfig(config: Config) {
    this.config = config;
  }

  draw() {
    const { samples, multiplicationFactor } = this.config;
    for (let i = 0; i < samples; i++) {
      const angle = getAngle(i, samples, offset);
      const { x, y } = getPointOnCircle(angle);

      const circle = document.createElementNS(svgns, "circle");
      setAttrNbr(circle, "cx", x);
      setAttrNbr(circle, "cy", y);
      setAttrNbr(circle, "r", r0);
      container.appendChild(circle);
    }

    for (let i = 0; i < samples; i++) {
      // trace les droites

      const angle1 = getAngle(i, samples, offset);
      const p1 = getPointOnCircle(angle1);

      const angle2 = getAngle(i * multiplicationFactor, samples, offset);
      const { x: x2, y: y2 } = getPointOnCircle(angle2);

      const line = document.createElementNS(svgns, "line");
      setAttrNbr(line, "x1", p1.x);
      setAttrNbr(line, "y1", p1.y);
      setAttrNbr(line, "x2", x2);
      setAttrNbr(line, "y2", y2);
      lineContainer.appendChild(line);
    }
  }
}
