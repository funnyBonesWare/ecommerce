import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../constants';

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const getProductFromAPI = async () => {
      try {
        setIsLoading(true);
        
        const response = await fetch(`${API_ENDPOINTS.PRODUCTS.replace('?limit=194', '')}/${productId}`);
        
        if (!response.ok) {
          throw new Error('Could not get product from server');
        }
        
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
        
      } catch (err) {
        setErrorMessage(err.message);
        setIsLoading(false);
      }
    };

    if (productId) {
      getProductFromAPI();
    }
  }, [productId]);

  return {
    product,
    isLoading,
    errorMessage
  };
};
