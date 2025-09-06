export const getUniqueCategories = (products) => {
  return [...new Set(products.map(product => product.category))].sort();
};

export const getUniqueBrands = (products) => {
  return [...new Set(products.map(product => product.brand))].sort();
};

export const filterProducts = (products, filterSettings) => {
  return products.filter(product => {
    const categoryMatches = filterSettings.selectedCategories.length === 0 || 
      filterSettings.selectedCategories.includes(product.category);
    
    const brandMatches = filterSettings.selectedBrands.length === 0 || 
      filterSettings.selectedBrands.includes(product.brand);
    
    const priceMatches = product.price >= filterSettings.priceRange[0] && 
      product.price <= filterSettings.priceRange[1];
    
    const ratingMatches = product.rating >= filterSettings.minRating;
    
    return categoryMatches && brandMatches && priceMatches && ratingMatches;
  });
};

export const groupProductsByCategory = (products) => {
  const productsByCategory = {};
  
  products.forEach(product => {
    const category = product.category;
    
    if (!productsByCategory[category]) {
      productsByCategory[category] = [];
    }
    
    productsByCategory[category].push(product);
  });
  
  return productsByCategory;
};

export const getCategoriesToShow = (productsByCategory) => {
  return Object.keys(productsByCategory).sort();
};
