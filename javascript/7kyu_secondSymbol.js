function secondSymbol(s, symbol) {
  const firstOccurence = s.indexOf(symbol);
  const secondOccurence = s.indexOf(symbol, firstOccurence + 1);
  if (firstOccurence === -1 || secondOccurence === -1) {
    return -1;
  }
  return secondOccurence;
}
