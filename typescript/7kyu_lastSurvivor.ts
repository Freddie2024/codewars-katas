export function lastSurvivor(letters: string, coords: number[]): string {
    //split the string into an array of characters
    let arr = letters.split('');
    for (let i = 0; i < coords.length; i++) {
      //remove one character at the index
      arr.splice(coords[i], 1);
    }
    return arr[0];
  }