function folding(a, b) {
  let numberOfSquares = 0;
  let sideA = a;
  let sideB = b;
  while (sideA > 0 && sideB > 0) {
    if (sideA > sideB) {
      numberOfSquares += Math.floor(sideA / sideB);
      sideA = sideA % sideB;
    } else {
      numberOfSquares += Math.floor(sideB / sideA);
      sideB = sideB % sideA;
    }
  }
  return numberOfSquares;
}
