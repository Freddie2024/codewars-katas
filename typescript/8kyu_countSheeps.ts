export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    const arrayOfPresentSheep: (boolean | undefined | null) [] = arrayOfSheep.filter((value) => value === true);
    return arrayOfPresentSheep.length;  
  }