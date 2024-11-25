function top3(products, amounts, prices) {
  const combined = products.map((product, index) => {
    const revenue = amounts[index] * prices[index];
    return [product, revenue, index];
  });
  combined.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    } else {
      return a[2] - b[2];
    }
  });
  const topProducts = combined.slice(0, 3).map((item) => item[0]);
  return topProducts;
}
