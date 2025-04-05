export function arr2bin(arr: any[]): string {
    let total = 0;
     for (const element of arr) {
         if (typeof element === 'number') {
             total += element;
         }
     }
     return total === 0 ? '0' : total.toString(2); 
 }