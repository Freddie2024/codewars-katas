function getNextSequence(sequence) {
  let result = ""; // Store the result as a string
  let count = 1; // Start with one occurrence of the first digit

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === sequence[i + 1]) {
      // Increment the count if the next digit is the same
      count++;
    } else {
      // Add count and digit to the result
      result += count + sequence[i];
      count = 1; // Reset count for the next group
    }
  }

  return result;
}

function lookAndSaySequence(firstElement, n) {
  let current = firstElement;

  for (let i = 1; i < n; i++) {
    // Start at 1 because the loop only needs to run n - 1 times to reach the nth term.
    current = getNextSequence(current);
  }

  return current;
}
