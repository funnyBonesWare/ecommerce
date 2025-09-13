import { useNavigate } from 'react-router-dom';
import ProductCard from '../ProductCard';
import Loading from '../Loading';
import Error from '../Error';
import useRandomProducts from '../../hooks/products/useRandomProducts';
import './styles.css';

const RecommendedProducts = ({ excludeId, title = "Recommended for You" }) => {
  const navigate = useNavigate();
  const { randomProducts, isLoading, errorMessage } = useRandomProducts(5, excludeId);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (isLoading) {
    return (
      <div className="recommended-products">
        <h2 className="recommended-title">{title}</h2>
        <Loading message="Loading recommendations..." />
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="recommended-products">
        <h2 className="recommended-title">{title}</h2>
        <Error message={errorMessage} />
      </div>
    );
  }

  if (randomProducts.length === 0) {
    return null;
  }

  return (
    <div className="recommended-products">
      <h2 className="recommended-title">{title}</h2>
      <div className="recommended-grid">
        {randomProducts.map((product) => (
          <div 
            key={product.id} 
            className="recommended-card-wrapper"
            onClick={() => handleProductClick(product.id)}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
