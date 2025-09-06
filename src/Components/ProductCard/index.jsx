import React from 'react';
import StarRating from '../StarRating';
import './styles.css';

const ProductCard = ({ product }) => {

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
        <StarRating rating={product.rating} />
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
          {product.stock > 0 ? 'View Details' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
