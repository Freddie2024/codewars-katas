export function stairsIn20(stairs:number[][]) : number {
    return stairs.flat().reduce((sum, dailyStairs) => sum + dailyStairs, 0) * 20
  }