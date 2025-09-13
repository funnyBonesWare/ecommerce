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
    <div className="recommended-products bg-white rounded shadow-md p-4 mt-4">
      <h2 className="recommended-title text-primary text-xl font-semibold text-center mb-4">{title}</h2>
      <div className="recommended-grid grid grid-auto-fit gap-4 justify-items-center">
        {randomProducts.map((product) => (
          <div 
            key={product.id} 
            className="recommended-card-wrapper w-full max-w-xs cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
