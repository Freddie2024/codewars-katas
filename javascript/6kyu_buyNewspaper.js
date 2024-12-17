function allCharactersExist(s1, s2) {
  for (const char of s2) {
    if (!s1.includes(char)) return false;
  }
  return true;
}

function buyNewspaper(s1, s2) {
  if (!allCharactersExist(s1, s2)) return -1;

  let s1Index = 0;
  let s2Index = 0;
  let repeats = 1;

  while (s2Index < s2.length) {
    if (s1[s1Index] === s2[s2Index]) s2Index++;
    s1Index++;
    if (s1Index === s1.length) {
      s1Index = 0;
      repeats += s2Index < s2.length ? 1 : 0;
    }
  }
  return repeats;
}
