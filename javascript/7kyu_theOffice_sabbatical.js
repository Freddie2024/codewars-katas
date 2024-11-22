function sabb(s, val, happiness) {
  let count = 0;
  for (let char of s) {
    if ("sabbatical".includes(char)) {
      count++;
    }
  }

  const total = count + val + happiness;

  if (total > 22) {
    return "Sabbatical! Boom!";
  } else {
    return "Back to your desk, boy.";
  }
}
