function consecutive(array) {
  const minValue = Math.min(...array);
  const maxValue = Math.max(...array);
  const range = maxValue - minValue + 1;
  const missingNumbers = range - array.length;
  if (array.length === 0 || array.length === 1) {
    return 0;
  }
  return missingNumbers;
}
