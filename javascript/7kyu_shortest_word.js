function findShort(s) {
  const wordsInString = s.split(" ");
  const shortestLength = wordsInString.reduce(
    (shortest, currentWord) =>
      currentWord.length < shortest ? currentWord.length : shortest,
    Infinity
  );
  return shortestLength;
}
