import React, { useState, useEffect } from 'react';
import Filters from '../Filters';
import ProductCard from '../ProductCard';
import './styles.css';

const Products = () => {
  // Step 1: Set up our data storage (state)
  const [allProducts, setAllProducts] = useState([]);        // Store all products from API
  const [isLoading, setIsLoading] = useState(true);          // Track if we're loading
  const [errorMessage, setErrorMessage] = useState(null);    // Store any error messages
  
  // Step 2: Set up our filter settings
  const [filterSettings, setFilterSettings] = useState({
    selectedCategories: [],    // Which categories user wants to see
    selectedBrands: [],        // Which brands user wants to see
    priceRange: [0, 100000],  // Min and max price user wants
    minRating: 0               // Minimum rating user wants
  });
  
  // Step 3: When component loads, get products from API
  useEffect(() => {
    getProductsFromAPI();
  }, []);

  // Step 4: Function to get products from the API
  const getProductsFromAPI = async () => {
    try {
      setIsLoading(true);  // Show loading message
      
      // Get all 194 products from the API
      const response = await fetch('https://dummyjson.com/products?limit=194');
      
      if (!response.ok) {
        throw new Error('Could not get products from server');
      }
      
      const data = await response.json();
      setAllProducts(data.products);  // Save products to our state
      setIsLoading(false);            // Hide loading message
      
    } catch (err) {
      setErrorMessage(err.message);   // Save error message
      setIsLoading(false);            // Hide loading message
    }
  };

  // Step 5: Get unique categories and brands for our filter dropdowns
  const availableCategories = [...new Set(allProducts.map(product => product.category))].sort();
  const availableBrands = [...new Set(allProducts.map(product => product.brand))].sort();

  // Step 6: Filter products based on user's choices
  const productsThatMatchFilters = allProducts.filter(product => {
    // Check if product matches category filter
    let categoryMatches = false;
    if (filterSettings.selectedCategories.length === 0) {
      // If no categories selected, show all products
      categoryMatches = true;
    } else {
      // If categories selected, check if product is in selected categories
      categoryMatches = filterSettings.selectedCategories.includes(product.category);
    }
    
    // Check if product matches brand filter
    let brandMatches = false;
    if (filterSettings.selectedBrands.length === 0) {
      // If no brands selected, show all products
      brandMatches = true;
    } else {
      // If brands selected, check if product is in selected brands
      brandMatches = filterSettings.selectedBrands.includes(product.brand);
    }
    
    // Check if product price is within range
    const priceMatches = product.price >= filterSettings.priceRange[0] && 
                        product.price <= filterSettings.priceRange[1];
    
    // Check if product rating meets minimum
    const ratingMatches = product.rating >= filterSettings.minRating;
    
    // Product must match ALL filters to be shown
    return categoryMatches && brandMatches && priceMatches && ratingMatches;
  });

  // Step 7: Group filtered products by category for display
  const productsByCategory = {};
  
  productsThatMatchFilters.forEach(product => {
    const category = product.category;
    
    // If this category doesn't exist yet, create it
    if (!productsByCategory[category]) {
      productsByCategory[category] = [];
    }
    
    // Add product to its category
    productsByCategory[category].push(product);
  });

  // Get list of categories that have products
  const categoriesToShow = Object.keys(productsByCategory).sort();

  // Step 8: Handle when user changes filters
  const handleFilterChange = (newFilterSettings) => {
    setFilterSettings(newFilterSettings);
  };

  // Step 9: Reset all filters to default
  const resetAllFilters = () => {
    setFilterSettings({
      selectedCategories: [],
      selectedBrands: [],
      priceRange: [0, 100000],
      minRating: 0
    });
  };

  // Step 10: Show loading message while getting products
  if (isLoading) {
    return (
      <div className="products-container">
        <div className="loading">Getting products from server...</div>
      </div>
    );
  }

  // Step 11: Show error message if something went wrong
  if (errorMessage) {
    return (
      <div className="products-container">
        <div className="error">Oops! Something went wrong: {errorMessage}</div>
      </div>
    );
  }

  // Step 12: Main display - show products organized by category
  return (
    <div className="products-container">
      {/* Header with product count */}
      <div className="products-header">
        <h2 className="products-title">All Products ({productsThatMatchFilters.length})</h2>
        <p className="products-subtitle">Browse products by category</p>
      </div>
      
      {/* Main layout: filters on left, products on right */}
      <div className="products-layout">
        {/* Left side: Filter options */}
        <Filters 
          filters={filterSettings}
          onFilterChange={handleFilterChange}
          categories={availableCategories}
          brands={availableBrands}
          onClearFilters={resetAllFilters}
        />

        {/* Right side: Product display */}
        <div className="products-content">
          {/* Show message if no products match filters */}
          {categoriesToShow.length === 0 ? (
            <div className="no-products">
              <h3>No products match your filters</h3>
              <p>Try changing your filter settings</p>
            </div>
          ) : (
            /* Show each category as a separate row */
            categoriesToShow.map(categoryName => (
              <div key={categoryName} className="category-section">
                {/* Category header with name and count */}
                <div className="category-header">
                  <h3 className="category-title">
                    {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                  </h3>
                  <span className="category-count">
                    ({productsByCategory[categoryName].length} products)
                  </span>
                </div>
                
                {/* Horizontal scrollable row of products */}
                <div className="products-horizontal-scroll">
                  <div className="products-row">
                    {/* Show each product in this category */}
                    {productsByCategory[categoryName].map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
