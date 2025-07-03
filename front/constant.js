(function () {
  const r0 = 0.5;
  const cx = 50;
  const cy = 50;
  const r = 45;
  const offset = -Math.PI / 2;
  const svgns = "http://www.w3.org/2000/svg";
  const container = document.querySelector("g.samples");
  const lineContainer = document.querySelector("g.lines");

  const a = 12;

  this.$multivizConstant = {
    r0,
    cx,
    cy,
    r,
    offset,
    svgns,
    container,
    lineContainer,
  };
})();
