function remove(string) {
  let without = string.replace(/!/g, "");
  return without + "!";
}
