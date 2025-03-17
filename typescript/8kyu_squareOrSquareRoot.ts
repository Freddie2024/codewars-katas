export function squareOrSquareRoot(array:number[]) : number[] {
    return array.map(num => {
          const sqrt = Math.sqrt(num);
          return Number.isInteger(sqrt) ? sqrt : num ** 2;
      });
  }