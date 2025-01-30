export function drawStairs(n: number): string {
    let stairs: string[] = [];
    for (let i=0; i<n; i++) {
      stairs.push(' '.repeat(i) + 'I');
    }
    return stairs.join('\n');
  }