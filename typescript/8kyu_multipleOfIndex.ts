export function multipleOfIndex(array: number[]):number[] {
    let newArray: number[] = [];
    if (array[0] === 0) {
      newArray.push(0);
    }
    for (let i = 1; i <= array.length; i ++) {
      if (array[i] % i === 0) {
          newArray.push(array[i])
          }
      }
    return newArray;
  }