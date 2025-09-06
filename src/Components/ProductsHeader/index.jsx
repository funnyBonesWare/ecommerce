const ProductsHeader = ({ productCount, subtitle = 'Browse products by category' }) => {
  return (
    <div className="products-header">
      <h2 className="products-title">All Products ({productCount})</h2>
      <p className="products-subtitle">{subtitle}</p>
    </div>
  );
};

export default ProductsHeader;
