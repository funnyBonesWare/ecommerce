import { useParams, useNavigate } from 'react-router-dom';
import { useCategoryProducts } from '../../hooks/products/useCategoryProducts';
import { useFilters } from '../../hooks/filters/useFilters';
import Loading from '../Loading';
import Error from '../Error';
import NoProducts from '../NoProducts';
import ProductCard from '../ProductCard';
import Filters from '../Filters';
import Button from '../Button';
import { 
  getUniqueBrands, 
  filterProducts, 
  getUniqueCategories 
} from '../../utils/products/productUtils';
import './styles.css';

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { categoryProducts, isLoading, errorMessage } = useCategoryProducts(category);
  const { filterSettings, handleFilterChange, resetAllFilters } = useFilters();

  const availableBrands = getUniqueBrands(categoryProducts);
  const availableCategories = getUniqueCategories(categoryProducts);
  const filteredProducts = filterProducts(categoryProducts, filterSettings);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleViewAllCategories = () => {
    navigate('/');
  };

  if (isLoading) {
    return <Loading message={`Loading ${category} products...`} />;
  }

  if (errorMessage) {
    return <Error message={errorMessage} />;
  }

  if (!categoryProducts || categoryProducts.length === 0) {
    return (
      <div className="category-page-container">
        <div className="category-header">
        <button 
          className="common-back-btn"
          onClick={handleBackClick}
        >
          <span className="common-back-icon">‹</span>
          Back
        </button>
          <h1 className="category-title">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Category'}
          </h1>
        </div>
        <NoProducts 
          title={`No products found in ${category} category`}
          subtitle="Try browsing other categories or check back later"
        />
      </div>
    );
  }

  return (
    <div className="category-page-container">
      <div className="category-header">
        <button 
          className="common-back-btn"
          onClick={handleBackClick}
        >
          <span className="common-back-icon">‹</span>
          Back
        </button>
        <div className="category-title-section">
          <h1 className="category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <p className="category-subtitle">
            {filteredProducts.length} of {categoryProducts.length} products
          </p>
        </div>
        <Button
          variant="outline" 
          size="small" 
          onClick={handleViewAllCategories}
          className="view-all-btn"
        >
          View All Categories
        </Button>
      </div>

      <div className="category-layout">
        <Filters 
          filters={filterSettings}
          onFilterChange={handleFilterChange}
          categories={availableCategories}
          brands={availableBrands}
          onClearFilters={resetAllFilters}
        />

        <div className="category-content">
          {filteredProducts.length === 0 ? (
            <NoProducts 
              title={`No products match your filters in ${category} category`}
              subtitle="Try adjusting your filter settings"
            />
          ) : (
            <div className="category-products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
