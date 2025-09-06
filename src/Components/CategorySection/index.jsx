import ProductCard from '../ProductCard';

const CategorySection = ({ categoryName, products }) => {
  const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  
  return (
    <div className="category-section">
      <div className="category-header">
        <h3 className="category-title">{formattedCategoryName}</h3>
        <span className="category-count">({products.length} products)</span>
      </div>
      
      <div className="products-horizontal-scroll">
        <div className="products-row">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
