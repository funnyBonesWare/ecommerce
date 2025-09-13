import './styles.css';

const ProductDescription = ({ 
  description, 
  title = "Product Description" 
}) => {
  if (!description) return null;

  return (
    <div className="product-description">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductDescription;
