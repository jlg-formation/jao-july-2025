export const getAngle = (
  i: number,
  samples: number,
  offset: number
): number => {
  return (i * (2 * Math.PI)) / samples + offset;
};
