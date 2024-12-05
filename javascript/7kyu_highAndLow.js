function highAndLow(numbers) {
  const realNumbers = numbers.split(" ").map(Number);
  const max = Math.max(...realNumbers);
  const min = Math.min(...realNumbers);
  return `${max} ${min}`;
}
