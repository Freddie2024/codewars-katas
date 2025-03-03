export const reverseSeq = (n: number): number[] => {
    let sequence: number[] = []
    for (let i = n; i > 0; i--) {
    sequence.push(i)
     }
     return sequence
   };