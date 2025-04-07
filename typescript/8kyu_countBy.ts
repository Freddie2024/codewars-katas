export function countBy(x: number, n: number): number[] {
    const array: number[] = [];
    for (let i=1; i <= n; i++){
          array.push(x*i)
      }
    return array;
  }