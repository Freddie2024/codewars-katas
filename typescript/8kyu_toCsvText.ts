export function toCsvText(array:number[][]):string {
    return array.map(line => line.join(',')).join('\n')
  }