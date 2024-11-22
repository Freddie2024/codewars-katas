function iTri(s) {
  const swim = 2.4;
  const bike = 112;
  const run = 26.2;
  const total = swim + bike + run;
  const wayToGo = total - s;
  if (s === 0) {
    return "Starting Line... Good Luck!";
  }
  if (s <= swim) {
    return { Swim: `${wayToGo.toFixed(2)} to go!` };
  }
  if (wayToGo > run) {
    return { Bike: `${wayToGo.toFixed(2)} to go!` };
  }
  if (wayToGo > 10) {
    return { Run: `${wayToGo.toFixed(2)} to go!` };
  }
  if (wayToGo > 0) {
    return { Run: "Nearly there!" };
  }
  return "You're done! Stop running!";
}
