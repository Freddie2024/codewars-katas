function positiveSum(arr) {
  let sum = 0;
  const filteredArr = arr.filter((num) => num > 0);
  for (let i = 0; i < filteredArr.length; i++) {
    sum += filteredArr[i];
  }
  return sum;
}
