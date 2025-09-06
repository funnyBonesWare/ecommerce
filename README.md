# E-Commerce React Application

A modern, fully-featured e-commerce application built with React, featuring product browsing, filtering, detailed product views, and a modular component architecture.

## 🚀 Features

- **Product Catalog**: Browse products with category-based organization
- **Advanced Filtering**: Filter by category, brand, price range, and rating
- **Product Details**: Comprehensive product pages with image galleries
- **Quantity Selection**: Interactive quantity selector with total price calculation
- **Responsive Design**: Mobile-first design that works on all devices
- **Modular Architecture**: Highly reusable components and custom hooks
- **Dynamic Routing**: URL-based navigation with product IDs

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── Button/                    # Reusable button component
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── CategorySection/           # Product category display
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── Error/                     # Error state component
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── Filters/                   # Product filtering sidebar
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── Loading/                   # Loading state component
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── Navbar/                    # Navigation header
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── NoProducts/                # Empty state component
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── ProductCard/               # Product card component
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── ProductDetails/            # Main product details page
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── ProductImageGallery/       # Image gallery component
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── ProductPrice/              # Price display component
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── ProductSpecs/              # Product specifications
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── Products/                  # Main products listing
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── ProductsHeader/            # Products page header
│   │   ├── index.jsx
│   │   └── styles.css
│   ├── QuantitySelector/          # Quantity selection component
│   │   ├── index.jsx
│   │   └── styles.css
│   └── StarRating/                # Star rating display
│       ├── index.jsx
│       └── styles.css
├── constants/
│   └── index.js                   # Application constants
├── hooks/
│   ├── filters/
│   │   └── useFilters.js          # Filter state management hook
│   └── products/
│       ├── useProducts.js         # Products API hook
│       ├── useProduct.js          # Individual product hook
│       ├── useQuantity.js         # Quantity management hook
│       └── useImageSelection.js   # Image selection hook
├── utils/
│   └── products/
│       ├── productUtils.js        # Product data utilities
│       └── priceUtils.js          # Price calculation utilities
├── App.jsx                        # Main application component
├── App.css                        # Global styles
├── index.css                      # Base styles
└── main.jsx                       # Application entry point
```

## 📦 Import Pattern

The project uses **direct file imports** without index files for better clarity and explicit dependencies:

### **Hooks Import Pattern**
```javascript
// ✅ Direct imports from specific files
import { useProducts } from '../../hooks/products/useProducts';
import { useProduct } from '../../hooks/products/useProduct';
import { useQuantity } from '../../hooks/products/useQuantity';
import { useImageSelection } from '../../hooks/products/useImageSelection';
import { useFilters } from '../../hooks/filters/useFilters';
```

### **Utils Import Pattern**
```javascript
// ✅ Direct imports from specific files
import { 
  getUniqueCategories, 
  getUniqueBrands, 
  filterProducts 
} from '../../utils/products/productUtils';

import { 
  calculateOriginalPrice, 
  calculateSavings 
} from '../../utils/products/priceUtils';
```

### **Benefits of Direct Imports**
- **Explicit Dependencies**: Clear which file is being imported
- **Better IDE Support**: Direct navigation and autocomplete
- **No Index File Maintenance**: Each file exports itself directly
- **Easier Refactoring**: Clear dependency mapping

## 🏗️ Architecture Benefits

### **Direct File Structure**
- **No Index Files**: Each hook and utility exports itself directly
- **Explicit Imports**: Clear which file is being imported
- **Better IDE Support**: Direct navigation and autocomplete
- **Easier Maintenance**: No need to maintain barrel exports

### **Hook Organization**
- **Logical Grouping**: Hooks grouped by functionality (products, filters)
- **Consistent Naming**: All hooks follow "use" prefix convention
- **Single Responsibility**: Each hook has a specific purpose
- **Reusability**: Hooks can be used across multiple components

### **Utility Organization**
- **Functional Separation**: Utilities separated by purpose (product data, price calculations)
- **Pure Functions**: All utilities are pure functions with no side effects
- **Easy Testing**: Utilities can be tested independently
- **Clear Dependencies**: Explicit imports make dependencies clear

## 🔧 Technology Stack

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **CSS3** - Styling with modern CSS features
- **ES6+** - Modern JavaScript features

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd eCommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎯 Application Flow

### 1. **Entry Point**
- Application starts at `main.jsx`
- Renders `App.jsx` with React Router setup
- Routes configured for home (`/`) and product details (`/product/:id`)

### 2. **Home Page Flow**
```
App.jsx
├── Navbar (navigation header)
└── Products (main product listing)
    ├── ProductsHeader (title and count)
    ├── Filters (sidebar filtering)
    └── CategorySection (product categories)
        └── ProductCard (individual products)
```

### 3. **Product Details Flow**
```
App.jsx
├── Navbar (navigation header)
└── ProductDetails
    ├── ProductImageGallery (main image + thumbnails)
    ├── ProductPrice (pricing information)
    ├── QuantitySelector (quantity + total)
    ├── Button (Add to Cart / Buy Now)
    ├── ProductSpecs (product details)
    └── Description (product description)
```

### 4. **Data Flow**
- **API Calls**: `useProducts` hook fetches all products
- **Individual Product**: `useProduct` hook fetches single product
- **Filtering**: `useFilters` hook manages filter state
- **State Management**: Local state with custom hooks

## 🧩 Reusable Components

### **Button Component**
```jsx
<Button 
  variant="primary|secondary|danger|outline|ghost"
  size="small|medium|large"
  disabled={false}
  onClick={handleClick}
>
  Button Text
</Button>
```

**Features:**
- 5 variants with different styling
- 3 sizes (small, medium, large)
- Disabled state support
- Consistent styling across app

### **QuantitySelector Component**
```jsx
<QuantitySelector 
  maxQuantity={100}
  initialQuantity={1}
  onQuantityChange={handleChange}
  showTotal={true}
  unitPrice={99.99}
  discountPercentage={10}
/>
```

**Features:**
- Increment/decrement buttons
- Input validation
- Total price calculation
- Stock validation
- Savings calculation

### **ProductImageGallery Component**
```jsx
<ProductImageGallery 
  images={productImages}
  thumbnail={productThumbnail}
  title={productTitle}
  maxThumbnails={4}
/>
```

**Features:**
- Main image display
- Thumbnail gallery
- Image selection
- Fallback to thumbnail
- Smooth transitions

### **ProductPrice Component**
```jsx
<ProductPrice 
  price={99.99}
  originalPrice={149.99}
  discountPercentage={33}
  showSavings={true}
  size="large|medium|small"
/>
```

**Features:**
- Price display with formatting
- Discount information
- Savings calculation
- Multiple sizes
- Responsive design

### **ProductSpecs Component**
```jsx
<ProductSpecs 
  specs={[
    { label: 'Brand', value: 'Apple' },
    { label: 'Category', value: 'Electronics' }
  ]}
  title="Product Details"
  columns={2}
/>
```

**Features:**
- Grid layout for specifications
- Configurable columns (1, 2, 3)
- Responsive design
- Consistent styling

## 🎣 Custom Hooks

### **useProducts Hook**
```javascript
const { allProducts, isLoading, errorMessage } = useProducts();
```
- Fetches all products from API
- Manages loading and error states
- Returns products array

### **useProduct Hook**
```javascript
const { product, isLoading, errorMessage } = useProduct(productId);
```
- Fetches individual product by ID
- Manages loading and error states
- Returns single product object

### **useFilters Hook**
```javascript
const { filterSettings, handleFilterChange, resetAllFilters } = useFilters();
```
- Manages filter state
- Provides filter change handlers
- Includes reset functionality

### **useQuantity Hook**
```javascript
const { 
  quantity, 
  updateQuantity, 
  increment, 
  decrement, 
  canIncrement, 
  canDecrement 
} = useQuantity(1, 100);
```
- Manages quantity state
- Provides increment/decrement functions
- Handles validation
- Syncs with input ref

### **useImageSelection Hook**
```javascript
const { 
  selectedImage, 
  currentImage, 
  selectImage, 
  nextImage, 
  previousImage 
} = useImageSelection(images, 0);
```
- Manages image gallery selection
- Provides navigation functions
- Handles image switching
- Returns current selected image


## 🛠️ Utility Functions

### **Price Utilities** (`priceUtils.js`)
```javascript
// Calculate original price from discount
calculateOriginalPrice(price, discountPercentage)

// Calculate savings amount
calculateSavings(price, discountPercentage)

// Calculate total price with quantity
calculateTotalPrice(price, quantity)

// Calculate total savings
calculateTotalSavings(price, discountPercentage, quantity)

// Format price display
formatPrice(price)

// Format savings display
formatSavings(savings)
```

### **Product Utilities** (`productUtils.js`)
```javascript
// Get unique categories from products
getUniqueCategories(products)

// Get unique brands from products
getUniqueBrands(products)

// Filter products based on criteria
filterProducts(products, filterSettings)

// Group products by category
groupProductsByCategory(products)

// Get categories to display
getCategoriesToShow(productsByCategory)
```

## 🎨 Styling Architecture

### **CSS Organization**
- **Component-specific styles**: Each component has its own CSS file
- **Global styles**: `App.css` and `index.css` for global styles
- **Responsive design**: Mobile-first approach with media queries
- **CSS Variables**: Consistent color scheme and spacing
- **Modern CSS**: Flexbox, Grid, and CSS transitions

### **Design System**
- **Colors**: Primary (#2874f0), Secondary (#ff9f00), Danger (#fb641b)
- **Typography**: Consistent font sizes and weights
- **Spacing**: 8px grid system
- **Border Radius**: 4px for small elements, 8px for cards
- **Shadows**: Subtle shadows for depth

## 🚦 State Management

### **Local State**
- Component-level state using `useState`
- Custom hooks for complex state logic
- Props drilling minimized through component composition

### **State Flow**
1. **API Data**: Fetched and stored in custom hooks
2. **Filter State**: Managed by `useFilters` hook
3. **UI State**: Managed locally in components
4. **Form State**: Managed by individual components

## 🔄 Data Flow

### **API Integration**
- **Endpoint**: `https://dummyjson.com/products`
- **Data Fetching**: Custom hooks handle API calls
- **Error Handling**: Comprehensive error states
- **Loading States**: Loading indicators for better UX

### **Filtering Logic**
1. Products fetched from API
2. Filter settings applied via `filterProducts` utility
3. Products grouped by category
4. Filtered results displayed in UI

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile Optimizations**
- Touch-friendly button sizes
- Horizontal scrolling for product cards
- Stacked layouts for better readability
- Optimized image sizes

## 🧪 Component Testing Strategy

### **Unit Testing**
- Individual component testing
- Hook testing with React Testing Library
- Utility function testing

### **Integration Testing**
- Component interaction testing
- Data flow testing
- User interaction testing

## 🚀 Performance Optimizations

### **Code Splitting**
- Route-based code splitting
- Lazy loading for heavy components

### **Memoization**
- `useMemo` for expensive calculations
- `useCallback` for event handlers
- React.memo for component memoization

### **Bundle Optimization**
- Tree shaking for unused code
- Vite's built-in optimizations
- CSS purging for unused styles

## 🔧 Development Guidelines

### **Component Structure**
```jsx
// Component file structure
import React from 'react';
import './styles.css';

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic
  return (
    <div className="component-container">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### **Naming Conventions**
- **Components**: PascalCase (e.g., `ProductCard`)
- **Component Files**: kebab-case (e.g., `product-card`)
- **Hooks**: camelCase starting with 'use' (e.g., `useProducts`)
- **Hook Files**: camelCase matching hook name (e.g., `useProducts.js`)
- **Utilities**: camelCase (e.g., `calculatePrice`)
- **Utility Files**: camelCase descriptive names (e.g., `productUtils.js`, `priceUtils.js`)
- **Import Pattern**: Direct file imports (no index files)

### **Props Interface**
```jsx
// Always define prop types or use TypeScript
const Component = ({ 
  requiredProp, 
  optionalProp = defaultValue,
  onAction = () => {} 
}) => {
  // Component implementation
};
```

## 🐛 Error Handling

### **Error Boundaries**
- Global error boundary for unexpected errors
- Component-level error handling
- Graceful fallbacks for failed API calls

### **User Feedback**
- Loading states for async operations
- Error messages for failed operations
- Success feedback for user actions

## 🔮 Future Enhancements

### **Planned Features**
- Shopping cart functionality
- User authentication
- Order management
- Payment integration
- Search functionality
- Wishlist feature
- Product reviews and ratings

### **Technical Improvements**
- TypeScript migration
- State management with Redux/Zustand
- PWA capabilities
- Performance monitoring
- SEO optimization

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using React and modern web technologies**