import { useParams, useNavigate } from 'react-router-dom';
import { useProduct } from '../../hooks/products/useProduct';
import Loading from '../Loading';
import Error from '../Error';
import Breadcrumb from '../Breadcrumb';
import ProductImageGallery from '../ProductImageGallery';
import ProductHeader from '../ProductHeader';
import ProductPrice from '../ProductPrice';
import QuantitySelector from '../QuantitySelector';
import ActionButtons from '../ActionButtons';
import ProductSpecs from '../ProductSpecs';
import ProductDescription from '../ProductDescription';
import KeyHighlights from '../KeyHighlights';
import DeliveryInfo from '../DeliveryInfo';
import RecommendedProducts from '../RecommendedProducts';
import { calculateOriginalPrice } from '../../utils/products/priceUtils';
import './styles.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, isLoading, errorMessage } = useProduct(id);

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

  const handleAddToCart = (quantity) => {
    console.log('Add to cart:', product.id, 'Quantity:', quantity);
    // Cart functionality will be implemented later
  };

  const handleBuyNow = (quantity) => {
    console.log('Buy now:', product.id, 'Quantity:', quantity);
    // Buy now functionality will be implemented later
  };

  const productSpecs = [
    { label: 'Brand', value: product.brand },
    { label: 'Category', value: product.category },
    { label: 'Stock', value: product.stock > 0 ? `${product.stock} available` : 'Out of Stock' },
    { label: 'Rating', value: `${product.rating}/5` }
  ];

  const breadcrumbItems = ['Home', product.category, product.brand];

  return (
    <div className="ecommerce-product-details">
      <Breadcrumb 
        items={breadcrumbItems}
        onBackClick={handleBackClick}
        showBackButton={true}
      />

      {/* Main Product Section */}
      <div className="product-main-section">
        <div className="product-container">
          {/* Left Side - Images + Info */}
          <div className="product-images-section">
            <ProductImageGallery 
              images={product.images}
              thumbnail={product.thumbnail}
              title={product.title}
            />
            
            <ProductDescription 
              description={product.description}
              title="Product Description"
            />
            
            <KeyHighlights 
              brand={product.brand}
              title="Key Highlights"
            />

            <DeliveryInfo />
          </div>

          {/* Right Side - Product Info */}
          <div className="product-info-section">
            <ProductHeader 
              title={product.title}
              rating={product.rating}
              showRating={true}
            />

            <div className="price-section">
              <ProductPrice 
                price={product.price}
                originalPrice={calculateOriginalPrice(product.price, product.discountPercentage)}
                discountPercentage={product.discountPercentage}
                size="large"
              />
            </div>

            <div className="quantity-actions-section">
              <QuantitySelector 
                maxQuantity={product.stock}
                initialQuantity={1}
                onQuantityChange={handleAddToCart}
                showTotal={true}
                unitPrice={product.price}
                discountPercentage={product.discountPercentage}
              />

              <ActionButtons 
                onAddToCart={() => handleAddToCart(1)}
                onBuyNow={() => handleBuyNow(1)}
                isOutOfStock={product.stock === 0}
                addToCartText="ADD TO CART"
                buyNowText="BUY NOW"
                showCartIcon={true}
              />
            </div>

            <div className="product-specs-right">
              <ProductSpecs 
                specs={productSpecs}
                title="Product Specifications"
                columns={1}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Recommended Products Section */}
      <RecommendedProducts excludeId={product.id} />
    </div>
  );
};

export default ProductDetails;
