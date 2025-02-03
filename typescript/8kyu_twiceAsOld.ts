export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
    let yearsFromNow: number;
    yearsFromNow = dadYearsOld - 2 * sonYearsOld;
   return Math.abs(yearsFromNow);
  }