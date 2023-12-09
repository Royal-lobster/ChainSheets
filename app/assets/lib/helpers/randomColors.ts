export function getRandomPaleColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = 30 + Math.random() * 30; // 30-60% to keep the color pale
  const lightness = 85 + Math.random() * 15; // 85-100% to keep the color light
  return `hsl(${hue},${saturation}%,${lightness}%)`;
}

export function getComplementaryColor(color: string) {
  const colorParts = color.slice(4, -1).split(",");
  const hue = (Number(colorParts[0]) + 180) % 360;
  const lightness = Math.max(Number(colorParts[2].slice(0, -1)) - 50, 0);
  return `hsl(${hue},${colorParts[1]},${lightness}%)`;
}
