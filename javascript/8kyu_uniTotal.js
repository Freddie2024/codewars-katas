function uniTotal(s) {
  return s.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
