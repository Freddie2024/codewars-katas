function flickSwitch(arr) {
  let state = true;
  return arr.map((word) => {
    if (word === "flick") {
      state = !state;
    }
    return state;
  });
}
