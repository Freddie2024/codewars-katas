function mergeArrays(arr1, arr2) {
  const combined = [...arr1, ...arr2];
  const unique = [...new Set(combined)];
  return unique.sort((a, b) => a - b);
}
