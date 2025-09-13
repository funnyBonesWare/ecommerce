import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../constants';

export const useCategoryProducts = (category) => {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getCategoryProductsFromAPI = async () => {
      try {
        setIsLoading(true);
        setErrorMessage(null);
        
        if (!category) {
          setCategoryProducts([]);
          setIsLoading(false);
          return;
        }

        // Fetch all products and filter by category
        const response = await fetch(API_ENDPOINTS.PRODUCTS);
        
        if (!response.ok) {
          throw new Error('Could not get products from server');
        }
        
        const data = await response.json();
        
        // Filter products by category
        const filteredProducts = data.products.filter(product => 
          product.category.toLowerCase() === category.toLowerCase()
        );
        
        setCategoryProducts(filteredProducts);
        setIsLoading(false);
        
      } catch (err) {
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };

    getCategoryProductsFromAPI();
  }, [category]);

  return {
    categoryProducts,
    isLoading,
    errorMessage
  };
};
