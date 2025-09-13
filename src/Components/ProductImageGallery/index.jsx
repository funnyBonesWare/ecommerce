import { useState } from 'react';
import './styles.css';

const ProductImageGallery = ({ 
  images = [], 
  thumbnail, 
  title = 'Product',
  maxThumbnails = 4 
}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageSelect = (index) => {
    setSelectedImage(index);
  };

  const displayImages = images.length > 0 ? images : [thumbnail];
  const currentImage = displayImages[selectedImage] || thumbnail;

  return (
    <div className="ecommerce-image-gallery">
      <div className="main-image-container">
        <div className="main-image">
          <img 
            src={currentImage} 
            alt={title}
            className="product-main-image"
          />
        </div>
      </div>
      
      <div className="thumbnail-gallery">
        {displayImages.slice(0, maxThumbnails).map((image, index) => (
          <div 
            key={index} 
            className={`thumbnail-item ${selectedImage === index ? 'active' : ''}`}
            onClick={() => handleImageSelect(index)}
          >
            <img 
              src={image} 
              alt={`${title} ${index + 1}`}
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>
      
      <div className="image-counter">
        {selectedImage + 1} of {displayImages.length}
      </div>
    </div>
  );
};

export default ProductImageGallery;
