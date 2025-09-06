export const calculateOriginalPrice = (price, discountPercentage) => {
  if (discountPercentage <= 0) return price;
  return Math.round(price / (1 - discountPercentage / 100));
};

export const calculateSavings = (price, discountPercentage) => {
  if (discountPercentage <= 0) return 0;
  const originalPrice = calculateOriginalPrice(price, discountPercentage);
  return Math.round(originalPrice - price);
};


