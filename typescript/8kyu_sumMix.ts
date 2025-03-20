export function sumMix(x: any[]): number {
    return x.map(Number).reduce((a , b ) => a + b , 0)
    }