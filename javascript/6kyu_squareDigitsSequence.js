function squareDigitsSequence(a0) {
  let arrayOfNumbers = [];
  let currentNumber = a0;

  while (!arrayOfNumbers.includes(currentNumber)) {
    arrayOfNumbers.push(currentNumber);
    let digits = currentNumber.toString().split("");
    currentNumber = digits.reduce((sum, digit) => sum + Number(digit) ** 2, 0);
  }

  return arrayOfNumbers.length + 1;
}
