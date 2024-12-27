function determineTime(durations) {
  const totalSeconds = durations.reduce((acc, time) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return acc + hours * 3600 + minutes * 60 + seconds;
  }, 0);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const timeStr = [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");

  if (totalSeconds > 86400) {
    return false;
  } else {
    return true;
  }
}
