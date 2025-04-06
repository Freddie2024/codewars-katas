export const digitize = (n: number): number[] => {
    const arr:number[] = Array.from(String(n),Number)
    return arr.reverse()
  };