import Filters from '../Filters';
import Loading from '../Loading';
import Error from '../Error';
import ProductsHeader from '../ProductsHeader';
import NoProducts from '../NoProducts';
import CategorySection from '../CategorySection';
import { useProducts } from '../../hooks/products/useProducts';
import { useFilters } from '../../hooks/filters/useFilters';
import { 
  getUniqueCategories, 
  getUniqueBrands, 
  filterProducts, 
  groupProductsByCategory, 
  getCategoriesToShow 
} from '../../utils/products/productUtils';
import './styles.css';

const Products = () => {
  const { allProducts, isLoading, errorMessage } = useProducts();
  const { filterSettings, handleFilterChange, resetAllFilters } = useFilters();

  const availableCategories = getUniqueCategories(allProducts);
  const availableBrands = getUniqueBrands(allProducts);
  const productsThatMatchFilters = filterProducts(allProducts, filterSettings);
  const productsByCategory = groupProductsByCategory(productsThatMatchFilters);
  const categoriesToShow = getCategoriesToShow(productsByCategory);

  if (isLoading) {
    return <Loading />;
  }

  if (errorMessage) {
    return <Error message={errorMessage} />;
  }

  return (
    <div className="products-container">
      <ProductsHeader productCount={productsThatMatchFilters.length} />
      
      <div className="products-layout">
        <Filters 
          filters={filterSettings}
          onFilterChange={handleFilterChange}
          categories={availableCategories}
          brands={availableBrands}
          onClearFilters={resetAllFilters}
        />

        <div className="products-content">
          {categoriesToShow.length === 0 ? (
            <NoProducts />
          ) : (
            categoriesToShow.map(categoryName => (
              <CategorySection
                key={categoryName}
                categoryName={categoryName}
                products={productsByCategory[categoryName]}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
