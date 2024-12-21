function sentencify(words) {
  return words.join(" ").replace(/^./, (char) => char.toUpperCase()) + ".";
}
