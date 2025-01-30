export function flip(dir: string, arr: number[]): number[] {
    let sortedArr: number[] = [];
      if (dir === 'R') {
         sortedArr = arr.sort((a,b) => a-b);
        } else {
         sortedArr = arr.sort((a,b) => b-a);
        } 
    return sortedArr;
}