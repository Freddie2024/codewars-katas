export function sumOfDifferences(arr: number[]): number {
    if (arr.length < 2) return 0; 
    const sortedArr: number[] = arr.sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < sortedArr.length - 1; i ++) {
      sum += sortedArr[i] - sortedArr[i + 1];
    }
    return sum;
  }