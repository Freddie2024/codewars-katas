function digitalRoot(n) {
  while (n >= 10) {
    let sum = 0;
    const arr = n.toString();
    for (let digit of arr) {
      sum += parseInt(digit);
    }
    n = sum;
  }
  return n;
}
