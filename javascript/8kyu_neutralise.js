function neutralise(s1, s2) {
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) result += s1[i];
    else result += "0";
  }
  return result;
}
