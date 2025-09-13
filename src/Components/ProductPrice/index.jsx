import './styles.css';

const ProductPrice = ({ 
  price, 
  originalPrice, 
  discountPercentage = 0,
  showSavings = true,
  size = 'large'
}) => {
  const savings = originalPrice && originalPrice > price ? originalPrice - price : 0;

  return (
    <div className={`product-price-section price-${size}`}>
      <div className="price-main">
        <span className="current-price">₹{price}</span>
        {originalPrice && originalPrice > price && (
          <span className="original-price">₹{originalPrice}</span>
        )}
      </div>
      {discountPercentage > 0 && (
        <div className="discount-info">
          <span className="discount-percentage">
            {Math.round(discountPercentage)}% OFF
          </span>
          {showSavings && savings > 0 && (
            <span className="savings">
              You save ₹{Math.round(savings)}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
