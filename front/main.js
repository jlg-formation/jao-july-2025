console.log("start");

const r0 = 1;

const samples = 10;

const svgns = "http://www.w3.org/2000/svg";
const container = document.querySelector("g.samples");

for (let i = 0; i < samples; i++) {
  const x = 23;
  const y = 45;

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", r0);
  container.appendChild(circle);
}
