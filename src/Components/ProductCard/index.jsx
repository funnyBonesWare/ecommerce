import React from 'react';
import './styles.css';

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="product-card-horizontal">
      <div className="product-image">
        <img 
          src={product.thumbnail} 
          alt={product.title}
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.title}</h3>
        <p className="product-brand">{product.brand}</p>
        <div className="product-rating">
          {renderStars(product.rating)}
          <span className="rating-text">({product.rating})</span>
        </div>
        <div className="product-price-section">
          <p className="product-price">₹{product.price}</p>
          {product.discountPercentage > 0 && (
            <span className="discount-badge">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
        </div>
        <p className="product-stock">
          {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
        </p>
        <button 
          className={`add-to-cart-btn ${product.stock === 0 ? 'disabled' : ''}`}
          disabled={product.stock === 0}
        >
          {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
