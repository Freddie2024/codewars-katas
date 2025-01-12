export function nextId(ids: number[]): number {
    let currentNumber = 0;
    const sortedIds = ids.sort((a, b) => a-b);
    for (let i = 0; i < ids.length; i++) {
       if (sortedIds[i] > currentNumber) {
        return currentNumber;
      }
      if (sortedIds[i] === currentNumber) {
        currentNumber++;
      }
    }    
      return currentNumber;  
  }