import { useNavigate } from 'react-router-dom';
import StarRating from '../StarRating';
import ProductPrice from '../ProductPrice';
import Button from '../Button';
import { calculateOriginalPrice } from '../../utils/products/priceUtils';
import './styles.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="product-card product-card-horizontal">
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
        <ProductPrice 
          price={product.price}
          originalPrice={calculateOriginalPrice(product.price, product.discountPercentage)}
          discountPercentage={product.discountPercentage}
          size="small"
          showSavings={false}
        />
        <p className="product-stock">
          {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
        </p>
        <Button 
          variant="secondary"
          size="small"
          disabled={product.stock === 0}
          onClick={handleViewDetails}
          className="view-details-btn"
        >
          {product.stock > 0 ? 'View Details' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
