export function getAverage(marks:number[]):number{
    const sum = marks.reduce((acc, cur) => acc + cur);
     return Math.floor(sum / marks.length);
   }