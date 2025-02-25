export function nearestSq(n : number) : number {
    const squareRoot = Math.sqrt(n);
    if (Number.isInteger(squareRoot)) {
      return n;
  } else {
    const roundedSquareRoot = Math.round(squareRoot);
    return roundedSquareRoot * roundedSquareRoot;
  }
  }