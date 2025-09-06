import { useRef, useState, useEffect } from 'react';
import './styles.css';

const QuantitySelector = ({ 
  maxQuantity = 100, 
  initialQuantity = 1, 
  onQuantityChange,
  showTotal = false,
  unitPrice = 0,
  discountPercentage = 0
}) => {
  const quantityRef = useRef(null);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [totalPrice, setTotalPrice] = useState(unitPrice * initialQuantity);

  useEffect(() => {
    if (quantityRef.current) {
      quantityRef.current.value = quantity;
    }
  }, [quantity]);

  useEffect(() => {
    if (onQuantityChange) {
      onQuantityChange(quantity);
    }
  }, [quantity, onQuantityChange]);

  const updateTotalPrice = (newQuantity) => {
    const total = unitPrice * newQuantity;
    setTotalPrice(total);
  };

  const handleQuantityChange = (newQuantity) => {
    const newQty = parseInt(newQuantity) || 1;
    if (newQty >= 1 && newQty <= maxQuantity) {
      setQuantity(newQty);
      updateTotalPrice(newQty);
    }
  };

  const handleQuantityIncrement = () => {
    if (quantity < maxQuantity) {
      const newQty = quantity + 1;
      setQuantity(newQty);
      updateTotalPrice(newQty);
      if (quantityRef.current) {
        quantityRef.current.value = newQty;
      }
    }
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      const newQty = quantity - 1;
      setQuantity(newQty);
      updateTotalPrice(newQty);
      if (quantityRef.current) {
        quantityRef.current.value = newQty;
      }
    }
  };

  const calculateSavings = () => {
    if (discountPercentage > 0) {
      const originalPrice = unitPrice / (1 - discountPercentage / 100);
      const savings = (originalPrice - unitPrice) * quantity;
      return Math.round(savings);
    }
    return 0;
  };

  return (
    <div className="quantity-selector">
      <label className="quantity-label">Quantity:</label>
      <div className="quantity-controls">
        <button 
          className="quantity-btn quantity-decrement"
          onClick={handleQuantityDecrement}
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          ref={quantityRef}
          type="number"
          className="quantity-input"
          defaultValue={initialQuantity}
          onChange={(e) => handleQuantityChange(e.target.value)}
          min="1"
          max={maxQuantity}
        />
        <button 
          className="quantity-btn quantity-increment"
          onClick={handleQuantityIncrement}
          disabled={quantity >= maxQuantity}
        >
          +
        </button>
      </div>
      <span className="quantity-stock">
        {maxQuantity > 0 ? `${maxQuantity} available` : 'Out of Stock'}
      </span>
      {showTotal && (
        <div className="quantity-total">
          <span className="total-label">Total: </span>
          <span className="total-price">₹{totalPrice}</span>
          {discountPercentage > 0 && (
            <span className="total-savings">
              (Save ₹{calculateSavings()})
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default QuantitySelector;
