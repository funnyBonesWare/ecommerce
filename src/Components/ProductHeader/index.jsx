import StarRating from '../StarRating';
import './styles.css';

const ProductHeader = ({ 
  title, 
  rating, 
  showRating = true 
}) => {
  return (
    <div className="product-header border-b border-gray-200 pb-4">
      <h1 className="product-title text-primary text-2xl font-medium mb-2">{title}</h1>
      {showRating && (
        <div className="product-rating-container flex items-center gap-3">
          <div className="rating-display flex items-center gap-2 text-primary px-2 py-1 rounded-sm text-xs font-medium">
            <span className="rating-number font-semibold">{rating}</span>
            <StarRating rating={rating} />
          </div>
          <span className="rating-text text-secondary text-sm">({rating} out of 5)</span>
        </div>
      )}
    </div>
  );
};

export default ProductHeader;
