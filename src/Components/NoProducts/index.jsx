const NoProducts = ({ 
  title = 'No products match your filters', 
  subtitle = 'Try changing your filter settings' 
}) => {
  return (
    <div className="no-products">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

export default NoProducts;
