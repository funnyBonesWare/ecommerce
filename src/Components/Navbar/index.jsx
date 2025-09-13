import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../../hooks/products/useProducts';
import { getUniqueCategories } from '../../utils/products/productUtils';
import './styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { allProducts } = useProducts();
  const categories = getUniqueCategories(allProducts).slice(0, 6); // Show top 6 categories

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          E-commerce
        </Link>
        
        <div className="navbar-menu">
          <Link to="/" className="navbar-link">
            All Products
          </Link>
          
          <div className="navbar-dropdown">
            <button 
              className="navbar-dropdown-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              Categories
              <span className="dropdown-arrow">▼</span>
            </button>
            
            {isMenuOpen && (
              <div className="navbar-dropdown-menu">
                {categories.map(category => (
                  <Link
                    key={category}
                    to={`/category/${category}`}
                    className="navbar-dropdown-item"
                    onClick={closeMenu}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <button 
          className="navbar-mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
