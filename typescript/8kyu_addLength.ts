export function addLength(str: string): string[] {
    const words = str.split(' ');
    const result = words.map(word => `${word} ${word.length}`);    
    return result
  }