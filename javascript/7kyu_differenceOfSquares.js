function differenceOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  const squareOfSum = sum * sum;

  let sumOfSquares = 0;
  for (let i = 0; i <= n; i++) {
    sumOfSquares += i * i;
  }

  return squareOfSum - sumOfSquares;
}
