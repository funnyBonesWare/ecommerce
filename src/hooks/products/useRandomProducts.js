import { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../../constants';

const useRandomProducts = (count = 5, excludeId = null) => {
  const [randomProducts, setRandomProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getRandomProducts = async () => {
      try {
        setIsLoading(true);
        setErrorMessage('');
        
        // Fetch all products
        const response = await fetch(API_ENDPOINTS.PRODUCTS);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        let products = data.products || [];
        
        // Exclude current product if excludeId is provided
        if (excludeId) {
          products = products.filter(product => product.id !== excludeId);
        }
        
        // Shuffle array and get random products
        const shuffled = products.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, count);
        
        setRandomProducts(selected);
      } catch (error) {
        console.error('Error fetching random products:', error);
        setErrorMessage('Failed to load recommended products');
      } finally {
        setIsLoading(false);
      }
    };

    getRandomProducts();
  }, [count, excludeId]);

  return { randomProducts, isLoading, errorMessage };
};

export default useRandomProducts;
