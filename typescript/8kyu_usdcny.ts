export function usdcny(usd: number): string {
    const conversionRate = 6.75;
    const cnyAmount = usd * conversionRate;
    return `${cnyAmount.toFixed(2)} Chinese Yuan`;
   }