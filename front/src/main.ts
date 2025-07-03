import "./style.css";

import {
  r0,
  cx,
  cy,
  r,
  offset,
  svgns,
  container,
  lineContainer,
} from "./constant";
import { setAttrNbr } from "./utils/setAttrNbr";
import { getAngle, getPointOnCircle } from "./utils/math";

console.log("start");

const samples = 10;
const multiplicationFactor = 2;

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
