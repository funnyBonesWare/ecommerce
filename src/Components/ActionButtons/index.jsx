import './styles.css';

const ActionButtons = ({ 
  onAddToCart, 
  onBuyNow, 
  isOutOfStock = false,
  addToCartText = "ADD TO CART",
  buyNowText = "BUY NOW",
  showCartIcon = true
}) => {
  return (
    <div className="action-buttons">
      <button 
        className="add-to-cart-btn"
        onClick={onAddToCart}
        disabled={isOutOfStock}
      >
        {showCartIcon && <span className="cart-icon">🛒</span>}
        {isOutOfStock ? 'OUT OF STOCK' : addToCartText}
      </button>
      <button 
        className="buy-now-btn"
        onClick={onBuyNow}
        disabled={isOutOfStock}
      >
        {buyNowText}
      </button>
    </div>
  );
};

export default ActionButtons;
