import { cx, r, cy } from "../constant";
import type { Point } from "../types/Point";

export const getAngle = (
  i: number,
  samples: number,
  offset: number
): number => {
  return (i * (2 * Math.PI)) / samples + offset;
};

export const getPointOnCircle = (angle: number): Point => {
  const x = cx + r * Math.cos(angle);
  const y = cy + r * Math.sin(angle);
  return { x, y };
};
