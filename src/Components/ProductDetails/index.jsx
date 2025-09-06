import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../../hooks/products/useProduct';
import { useQuantity } from '../../hooks/products/useQuantity';
import StarRating from '../StarRating';
import Loading from '../Loading';
import Error from '../Error';
import ProductImageGallery from '../ProductImageGallery';
import ProductPrice from '../ProductPrice';
import QuantitySelector from '../QuantitySelector';
import ProductSpecs from '../ProductSpecs';
import Button from '../Button';
import { calculateOriginalPrice, calculateSavings } from '../../utils/products/priceUtils';
import './styles.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, isLoading, errorMessage } = useProduct(id);
  const { quantity, updateQuantity } = useQuantity(1, product?.stock || 100);

  if (isLoading) {
    return <Loading message="Loading product details..." />;
  }

  if (errorMessage) {
    return <Error message={errorMessage} />;
  }

  if (!product) {
    return <Error message="Product not found" />;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    console.log('Add to cart:', product.id, 'Quantity:', quantity);
  };

  const handleBuyNow = () => {
    console.log('Buy now:', product.id, 'Quantity:', quantity);
  };

  const productSpecs = [
    { label: 'Brand', value: product.brand },
    { label: 'Category', value: product.category },
    { label: 'Stock', value: product.stock > 0 ? `${product.stock} available` : 'Out of Stock' },
    { label: 'Rating', value: `${product.rating}/5` }
  ];

  return (
    <div className="product-details-container">
      <div className="breadcrumb">
        <Button 
          variant="ghost" 
          size="small" 
          onClick={handleBackClick}
          className="back-btn"
        >
          ← Back
        </Button>
        <span className="breadcrumb-text">
          {product.category} / {product.brand}
        </span>
      </div>

      <div className="product-details-main">
        <ProductImageGallery 
          images={product.images}
          thumbnail={product.thumbnail}
          title={product.title}
        />

        <div className="product-info">
          <div className="product-title-section">
            <h1 className="product-title">{product.title}</h1>
            <div className="product-rating-section">
              <StarRating rating={product.rating} />
              <span className="rating-count">({product.rating} out of 5)</span>
            </div>
          </div>

          <ProductPrice 
            price={product.price}
            originalPrice={calculateOriginalPrice(product.price, product.discountPercentage)}
            discountPercentage={product.discountPercentage}
            size="large"
          />

          <QuantitySelector 
            maxQuantity={product.stock}
            initialQuantity={1}
            onQuantityChange={updateQuantity}
            showTotal={true}
            unitPrice={product.price}
            discountPercentage={product.discountPercentage}
          />

          <div className="product-actions">
            <Button 
              variant="secondary"
              size="large"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="add-to-cart-btn"
            >
              {product.stock > 0 ? 'ADD TO CART' : 'OUT OF STOCK'}
            </Button>
            <Button 
              variant="danger"
              size="large"
              onClick={handleBuyNow}
              disabled={product.stock === 0}
              className="buy-now-btn"
            >
              BUY NOW
            </Button>
          </div>

          <ProductSpecs 
            specs={productSpecs}
            title="Product Details"
            columns={2}
          />

          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
