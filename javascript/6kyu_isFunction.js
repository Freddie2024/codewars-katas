function isFunction(pairs) {
  const inputOutputMap = {};
  for (const [x, y] of pairs) {
    if (x in inputOutputMap) {
      if (inputOutputMap[x] !== y) {
        return false;
      }
    } else {
      inputOutputMap[x] = y;
    }
  }
  return true;
}
