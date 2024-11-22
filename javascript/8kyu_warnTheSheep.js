function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf("wolf");

  if (wolfPosition === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    const sheepPosition = queue.length - wolfPosition - 1;
    return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
  }
}
