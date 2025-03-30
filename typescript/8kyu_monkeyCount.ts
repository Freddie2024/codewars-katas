export function monkeyCount(n: number) {
    let countingMonkeys: number[] = [];
    for(let i = 1; i <= n; i++) {
      countingMonkeys.push(i);
    }
    return countingMonkeys;
  }