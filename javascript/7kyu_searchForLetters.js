function change (string) {
  const stringToLowerCase = string.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let newString = "";
  for (let char of alphabet) {
    if (stringToLowerCase.includes(char)) {
      newString += "1"
    } else {
    newString += "0"
    }
  }
  return newString
}