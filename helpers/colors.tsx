export function rgbToRgba(rgb: string, alpha: number) {
  alpha = Math.max(0, Math.min(1, alpha));
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  if (!match) {
    return "rgba(0,0,0," + alpha + ")";
  }

  const [, r, g, b] = match;

  return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
}
