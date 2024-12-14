function longestWord(stringOfWords) {
  let longest = "";
  for (let word of stringOfWords.split(" ")) {
    if (word.length >= longest.length) {
      longest = word;
    }
  }
  return longest;
}
