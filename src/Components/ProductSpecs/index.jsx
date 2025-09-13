import './styles.css';

const ProductSpecs = ({ 
  specs = [], 
  title = 'Product Details',
  columns = 2 
}) => {
  return (
    <div className="product-specs">
      <h3>{title}</h3>
      <div className={`specs-grid specs-${columns}-col`}>
        {specs.map((spec, index) => (
          <div key={index} className="spec-item">
            <span className="spec-label">{spec.label}:</span>
            <span className="spec-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecs;
