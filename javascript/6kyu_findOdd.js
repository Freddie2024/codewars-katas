function findOdd(A) {
  const counts = {};
  A.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  for (const num in counts) {
    if (counts[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}
