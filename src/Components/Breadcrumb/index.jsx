
const Breadcrumb = ({ 
  items = [], 
  onBackClick,
  showBackButton = true 
}) => {
  return (
    <div className="common-breadcrumb">
      <div className="common-breadcrumb-container">
        {showBackButton && (
          <button className="common-back-btn" onClick={onBackClick}>
            <span className="common-back-icon">‹</span>
            Back
          </button>
        )}
        <div className="common-breadcrumb-path">
          {items.map((item, index) => (
            <div key={index} className="common-breadcrumb-item">
              {index > 0 && <span className="common-breadcrumb-separator">›</span>}
              <span className="common-breadcrumb-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
