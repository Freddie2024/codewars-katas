export class Kata {
    static getCount(str: string): number {
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(char => vowels.includes(char)).length;
    }
  }