function twoOldestAges(ages) {
  const twoOldestAges = ages
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reverse();
  return twoOldestAges;
}
