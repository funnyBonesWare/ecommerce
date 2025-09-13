import './styles.css';

const OverlayLoader = ({ 
  message = 'Loading...', 
  show = true, 
  size = 'medium',
  variant = 'overlay' 
}) => {
  if (!show) return null;

  const loaderClass = variant === 'inline' ? 'inline-loader' : 'overlay-loader';
  const contentClass = variant === 'inline' ? 'inline-loader-content' : 'loader-content';
  const spinnerClass = `spinner spinner-${size}`;

  return (
    <div className={loaderClass}>
      <div className={contentClass}>
        <div className={spinnerClass}></div>
        {message && <p className="loader-message">{message}</p>}
      </div>
    </div>
  );
};

export default OverlayLoader;
