export const strongNumber = (num: number): string => {
    const factorials = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  
    const sumOfFactorials = num
      .toString() 
      .split('') 
      .map(digit => factorials[Number(digit)]) 
      .reduce((sum, factorial) => sum + factorial, 0); 
  
    return sumOfFactorials === num ? "STRONG!!!!" : "Not Strong !!";
  };