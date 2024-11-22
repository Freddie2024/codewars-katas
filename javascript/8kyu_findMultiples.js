function findMultiples(integer, limit) {
  const multiples = [];

  for (i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }

  return multiples;
}
