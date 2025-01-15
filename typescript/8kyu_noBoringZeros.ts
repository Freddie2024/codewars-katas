export function noBoringZeros(n: number): number {
    let endsNumberWithZero: number = n;
    while (endsNumberWithZero !== 0 && endsNumberWithZero % 10 === 0) {
      endsNumberWithZero = endsNumberWithZero / 10;
    }
    return endsNumberWithZero;
  }