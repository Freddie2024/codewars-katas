const romajiDictLow = "aeiou";
const romajiDictUp = "AEIOU";
const hiraDict = "あえいおう";
const kataDict = "アエイオウ";

function vowels(input, output) {
  if (!input) return "";

  let result = "";

  for (let char of input) {
    if (output === "romaji") {
      // Check if char exists in Hiragana
      if (hiraDict.includes(char)) {
        result += romajiDictLow[hiraDict.indexOf(char)];
        continue;
      }
      // Check if char exists in Katakana
      if (kataDict.includes(char)) {
        result += romajiDictLow[kataDict.indexOf(char)];
        continue;
      }
      // If not found, keep as is
      result += char;
    } else if (output === "hiragana") {
      // Check if char exists in Romaji (lowercase)
      if (romajiDictLow.includes(char)) {
        result += hiraDict[romajiDictLow.indexOf(char)];
        continue;
      }
      // Check if char exists in Romaji (uppercase)
      if (romajiDictUp.includes(char)) {
        result += hiraDict[romajiDictUp.indexOf(char)];
        continue;
      }
      // If the character is already Hiragana, keep it unchanged
      if (hiraDict.includes(char)) {
        result += char;
        continue;
      }
      // If the character is Katakana, convert it to Hiragana
      if (kataDict.includes(char)) {
        result += hiraDict[kataDict.indexOf(char)];
        continue;
      }
      result += char;
    } else if (output === "katakana") {
      // Check if char exists in Romaji (lowercase)
      if (romajiDictLow.includes(char)) {
        result += kataDict[romajiDictLow.indexOf(char)];
        continue;
      }
      // Check if char exists in Romaji (uppercase)
      if (romajiDictUp.includes(char)) {
        result += kataDict[romajiDictUp.indexOf(char)];
        continue;
      }
      // If the character is already Katakana, keep it unchanged
      if (kataDict.includes(char)) {
        result += char;
        continue;
      }
      // If the character is Hiragana, convert it to Katakana
      if (hiraDict.includes(char)) {
        result += kataDict[hiraDict.indexOf(char)];
        continue;
      }
      result += char;
    }
  }

  return result;
}
