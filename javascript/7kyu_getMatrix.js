function getMatrix(number) {
  const matrix = [];
  for (let i = 0; i < number; i++) {
    const row = [];
    for (let j = 0; j < number; j++) {
      row.push(i === j ? 1 : 0);
    }
    matrix.push(row);
  }
  return matrix;
}
