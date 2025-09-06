import { useState } from 'react';

export const useImageSelection = (images = [], initialIndex = 0) => {
  const [selectedImage, setSelectedImage] = useState(initialIndex);

  const selectImage = (index) => {
    if (index >= 0 && index < images.length) {
      setSelectedImage(index);
    }
  };

  const nextImage = () => {
    const nextIndex = (selectedImage + 1) % images.length;
    setSelectedImage(nextIndex);
  };

  const previousImage = () => {
    const prevIndex = selectedImage === 0 ? images.length - 1 : selectedImage - 1;
    setSelectedImage(prevIndex);
  };

  const currentImage = images[selectedImage] || images[0];

  return {
    selectedImage,
    currentImage,
    selectImage,
    nextImage,
    previousImage,
    hasImages: images.length > 0,
    totalImages: images.length
  };
};
