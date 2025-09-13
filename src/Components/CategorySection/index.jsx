import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import ProductCard from '../ProductCard';
import Button from '../Button';
import './styles.css';

const CategorySection = ({ categoryName, products }) => {
  const formattedCategoryName = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScrollPosition);
      return () => scrollElement.removeEventListener('scroll', checkScrollPosition);
    }
  }, [products]);

  return (
    <div className="category-section">
      <div className="category-header">
        <div className="category-title-section">
          <h3 className="category-title">{formattedCategoryName}</h3>
          <span className="category-count">({products.length} products)</span>
        </div>
        <div className="category-actions">
          <div className="scroll-controls">
            <Button 
              variant="ghost" 
              size="small"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className="scroll-btn scroll-left"
              aria-label="Scroll left"
            >
              ‹
            </Button>
            <Button 
              variant="ghost" 
              size="small"
              onClick={scrollRight}
              disabled={!canScrollRight}
              className="scroll-btn scroll-right"
              aria-label="Scroll right"
            >
              ›
            </Button>
          </div>
          <Link to={`/category/${categoryName}`}>
            <Button 
              variant="outline" 
              size="small"
              className="view-category-btn"
            >
              View All
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="products-horizontal-scroll" ref={scrollRef}>
        <div className="products-row">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
