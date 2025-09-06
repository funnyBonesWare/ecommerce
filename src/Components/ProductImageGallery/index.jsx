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
    <div className="product-images">
      <div className="main-image">
        <img 
          src={currentImage} 
          alt={title}
        />
      </div>
      <div className="image-gallery">
        {displayImages.slice(0, maxThumbnails).map((image, index) => (
          <div 
            key={index} 
            className={`gallery-thumb ${selectedImage === index ? 'active' : ''}`}
            onClick={() => handleImageSelect(index)}
          >
            <img src={image} alt={`${title} ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
