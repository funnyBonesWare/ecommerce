export const calculateOriginalPrice = (price, discountPercentage) => {
  if (discountPercentage <= 0) return price;
  return Math.round(price / (1 - discountPercentage / 100));
};

export const calculateSavings = (price, discountPercentage) => {
  if (discountPercentage <= 0) return 0;
  const originalPrice = calculateOriginalPrice(price, discountPercentage);
  return Math.round(originalPrice - price);
};

export const calculateTotalPrice = (price, quantity) => {
  return price * quantity;
};

export const calculateTotalSavings = (price, discountPercentage, quantity) => {
  const savingsPerUnit = calculateSavings(price, discountPercentage);
  return savingsPerUnit * quantity;
};

export const formatPrice = (price) => {
  return `₹${price}`;
};

export const formatSavings = (savings) => {
  return `₹${savings}`;
};
