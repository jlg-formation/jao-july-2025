console.log("start");

const r0 = 1;
const cx = 50;
const cy = 50;
const r = 45;
const offset = -Math.PI / 2;

const samples = 10;

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");

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
