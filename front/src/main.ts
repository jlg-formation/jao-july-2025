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

console.log("start");
const a = 78;
const samples = 10;
const multiplicationFactor = 2;

for (let i = 0; i < samples; i++) {
  const angle = (i * (2 * Math.PI)) / samples + offset;
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", r0);
  container.appendChild(circle);
}

for (let i = 0; i < samples; i++) {
  // trace les droites

  const angle1 = (i * (2 * Math.PI)) / samples + offset;
  const x1 = cx + r * Math.cos(angle1);
  const y1 = cy + r * Math.sin(angle1);

  const angle2 = (i * multiplicationFactor * (2 * Math.PI)) / samples + offset;
  const x2 = cx + r * Math.cos(angle2);
  const y2 = cy + r * Math.sin(angle2);

  const line = document.createElementNS(svgns, "line");
  line.setAttributeNS(null, "x1", x1);
  line.setAttributeNS(null, "y1", y1);
  line.setAttributeNS(null, "x2", x2);
  line.setAttributeNS(null, "y2", y2);
  lineContainer.appendChild(line);
}
