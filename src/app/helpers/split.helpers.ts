export const splitArrayInEqualSizeOf = <T>(arr: T[], size: number): T[][] =>
  arr.reduce((accumulator: T[][], currentValue: T, index: number) =>
      index % size === 0
        ? [...accumulator, [currentValue]]
        : accumulator.map((a: T[], i: number) => i === Math.floor(index / size) ? [...a, currentValue] : a),
    []);
