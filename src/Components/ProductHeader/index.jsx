import StarRating from '../StarRating';
import './styles.css';

const ProductHeader = ({ 
  title, 
  rating, 
  showRating = true 
}) => {
  return (
    <div className="product-header">
      <h1 className="product-title">{title}</h1>
      {showRating && (
        <div className="product-rating-container">
          <div className="rating-display">
            <span className="rating-number">{rating}</span>
            <StarRating rating={rating} />
          </div>
          <span className="rating-text">({rating} out of 5)</span>
        </div>
      )}
    </div>
  );
};

export default ProductHeader;
