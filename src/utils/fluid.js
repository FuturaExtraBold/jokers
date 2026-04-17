export function fluid(min, max, minVw = 540, maxVw = 1920) {
  const slope = (max - min) / (maxVw - minVw);
  const intercept = min - slope * minVw;
  const clampMin = Math.min(min, max);
  const clampMax = Math.max(min, max);
  return `clamp(${clampMin}px, ${intercept}px + ${slope * 100}vw, ${clampMax}px)`;
}
