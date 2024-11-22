function enough(cap, on, wait) {
  let sum = cap - on - wait;
  if (sum >= 0) {
    return 0;
  } else {
    return Math.abs(sum);
  }
}
