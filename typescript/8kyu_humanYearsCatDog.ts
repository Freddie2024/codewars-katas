export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    return [
      humanYears,
      humanYears > 1 ? 15 + 9 + ((humanYears - 2) * 4): 15,
      humanYears > 1 ? 15 + 9 + ((humanYears - 2) * 5): 15,
    ];
  }