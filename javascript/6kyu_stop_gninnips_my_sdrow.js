function spinWords(string) {
  const wordsInString = string.split(" ");
  const transformedWords = wordsInString.map((word) => {
    if (word.length >= 5) {
      return word.split("").reverse().join("");
    }
    return word;
  });
  return transformedWords.join(" ");
}
