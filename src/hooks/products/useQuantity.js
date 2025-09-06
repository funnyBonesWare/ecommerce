import { useState, useRef, useEffect } from 'react';

export const useQuantity = (initialQuantity = 1, maxQuantity = 100) => {
  const quantityRef = useRef(null);
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    if (quantityRef.current) {
      quantityRef.current.value = quantity;
    }
  }, [quantity]);

  const updateQuantity = (newQuantity) => {
    const qty = parseInt(newQuantity) || 1;
    if (qty >= 1 && qty <= maxQuantity) {
      setQuantity(qty);
    }
  };

  const increment = () => {
    if (quantity < maxQuantity) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      if (quantityRef.current) {
        quantityRef.current.value = newQty;
      }
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      if (quantityRef.current) {
        quantityRef.current.value = newQty;
      }
    }
  };

  const reset = () => {
    setQuantity(initialQuantity);
  };

  return {
    quantity,
    quantityRef,
    updateQuantity,
    increment,
    decrement,
    reset,
    canIncrement: quantity < maxQuantity,
    canDecrement: quantity > 1
  };
};
