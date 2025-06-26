export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pitSizeDifference(pitsAmount: number): number {
  if (pitsAmount <= 8)
    return 3;
  return 2;
}