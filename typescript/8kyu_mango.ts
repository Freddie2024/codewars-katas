export function mango(quantity: number, price: number): number{
    const free: number = Math.floor(quantity / 3);
    return (quantity - free) * price;  
  }