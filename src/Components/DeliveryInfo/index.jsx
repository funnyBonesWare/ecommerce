import './styles.css';

const DeliveryInfo = ({ 
  deliveryOptions = []
}) => {
  const defaultOptions = [
    {
      icon: "🚚",
      title: "Free Delivery",
      description: "Order above ₹500"
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      description: "30 days return policy"
    }
  ];

  const displayOptions = deliveryOptions.length > 0 ? deliveryOptions : defaultOptions;

  return (
    <div className="delivery-info">
      {displayOptions.map((option, index) => (
        <div key={index} className="delivery-option">
          <span className="delivery-icon">{option.icon}</span>
          <div className="delivery-text">
            <span className="delivery-title">{option.title}</span>
            <span className="delivery-desc">{option.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryInfo;
