function minSum(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const half = Math.floor(arr.length / 2);
  const firstHalf = sortedArray.slice(0, half);
  const secondHalf = sortedArray.slice(half);
  const secondReversed = secondHalf.reverse();
  let sum = 0;
  for (let i = 0; i < half; i++) {
    sum += firstHalf[i] * secondHalf[i];
  }
  return sum;
}
