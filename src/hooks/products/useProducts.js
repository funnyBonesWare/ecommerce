import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../constants';

export const useProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const getProductsFromAPI = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch(API_ENDPOINTS.PRODUCTS);
      
      if (!response.ok) {
        throw new Error('Could not get products from server');
      }
      
      const data = await response.json();
      setAllProducts(data.products);
      setIsLoading(false);
      
    } catch (err) {
      setErrorMessage(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  return {
    allProducts,
    isLoading,
    errorMessage
  };
};
