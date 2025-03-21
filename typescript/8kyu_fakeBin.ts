export const fakeBin = (x: string): string => 
    x.split('').map(n => Number(n) < 5 ? '0' : '1').join('');
