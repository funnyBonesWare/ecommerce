import { RATING_OPTIONS, PRICE_LIMITS } from '../../constants';
import Button from '../Button';
import './styles.css';

const Filters = ({ 
  filters, 
  onFilterChange, 
  categories, 
  brands, 
  onClearFilters 
}) => {
  const handleCategoryChange = (category) => {
    onFilterChange({
      ...filters,
      selectedCategories: filters.selectedCategories.includes(category)
        ? filters.selectedCategories.filter(c => c !== category)
        : [...filters.selectedCategories, category]
    });
  };

  const handleBrandChange = (brand) => {
    onFilterChange({
      ...filters,
      selectedBrands: filters.selectedBrands.includes(brand)
        ? filters.selectedBrands.filter(b => b !== brand)
        : [...filters.selectedBrands, brand]
    });
  };

  const handlePriceRangeChange = (priceRange) => {
    onFilterChange({
      ...filters,
      priceRange: priceRange
    });
  };

  const handleRatingChange = (rating) => {
    onFilterChange({
      ...filters,
      minRating: rating
    });
  };


  return (
    <div className="filters-sidebar">
      <div className="filters-header">
        <h3>Filters</h3>
        <Button 
          variant="outline" 
          size="small" 
          onClick={onClearFilters}
          className="clear-filters-btn"
        >
          Clear All
        </Button>
      </div>
      
      <div className="filters-content">
        {/* Category Filter */}
        <div className="filter-group">
          <h4>Categories</h4>
          <div className="filter-options">
            {categories.filter(category => category).map(category => (
              <label key={category} className="filter-option">
                <input
                  type="checkbox"
                  checked={filters.selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <span className="filter-label">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="filter-group">
          <h4>Brands</h4>
          <div className="filter-options">
            {brands.filter(brand => brand).map(brand => (
              <label key={brand} className="filter-option">
                <input
                  type="checkbox"
                  checked={filters.selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                />
                <span className="filter-label">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="filter-group">
          <h4>Price Range</h4>
          <div className="price-range">
            <div className="price-inputs">
              <input
                type="number"
                value={filters.priceRange[0]}
                onChange={(e) => handlePriceRangeChange([Number(e.target.value), filters.priceRange[1]])}
                min={PRICE_LIMITS.MIN}
                max={PRICE_LIMITS.MAX}
              />
              <span>-</span>
              <input
                type="number"
                value={filters.priceRange[1]}
                onChange={(e) => handlePriceRangeChange([filters.priceRange[0], Number(e.target.value)])}
                min={PRICE_LIMITS.MIN}
                max={PRICE_LIMITS.MAX}
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="filter-group">
          <h4>Minimum Rating</h4>
          <div className="rating-filter">
            {RATING_OPTIONS.map(rating => (
              <Button
                key={rating}
                variant={filters.minRating === rating ? 'primary' : 'ghost'}
                size="small"
                onClick={() => handleRatingChange(rating)}
                className="rating-btn"
              >
                {rating}+
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
