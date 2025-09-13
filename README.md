# 🛒 E-Commerce React Application

A modern, responsive e-commerce application built with React, featuring product browsing, category filtering, detailed product views, and recommendation system.

## 📋 Table of Contents

- [Overview](#overview)
- [Application Flow](#application-flow)
- [Pages & Modules](#pages--modules)
- [Reusable Components](#reusable-components)
- [Custom Hooks](#custom-hooks)
- [Utilities](#utilities)
- [Styling System](#styling-system)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)

## 🎯 Overview

This e-commerce application provides a complete shopping experience with:
- **Product Browsing**: View all products with filtering and search
- **Category Navigation**: Browse products by categories
- **Product Details**: Detailed product information with recommendations
- **Responsive Design**: Mobile-first approach with modern UI
- **Performance Optimized**: Efficient loading and smooth interactions

## 🔄 Application Flow

### Main User Journey

```
1. Landing Page (Products) 
   ↓
2. Browse Products with Filters
   ↓
3. Select Category or Product
   ↓
4. View Product Details
   ↓
5. See Recommended Products
   ↓
6. Navigate Back or Continue Shopping
```

### Navigation Flow

```
App.jsx (Router)
├── / (Products Page)
├── /category/:category (Category Page)
└── /product/:id (Product Details Page)
```

## 📄 Pages & Modules

### 1. **Products Page** (`/`)
**File**: `src/Components/Products/index.jsx`

**Purpose**: Main landing page displaying all products with filtering capabilities

**Features**:
- Product grid with filtering sidebar
- Category sections with horizontal scrolling
- Search and filter functionality
- Responsive design

**Key Components Used**:
- `Filters` - Product filtering sidebar
- `CategorySection` - Horizontal product categories
- `ProductCard` - Individual product display
- `Loading` & `Error` - State management

### 2. **Category Page** (`/category/:category`)
**File**: `src/Components/CategoryPage/index.jsx`

**Purpose**: Display products filtered by specific category

**Features**:
- Category-specific product grid
- Breadcrumb navigation
- Filtering within category
- Back navigation

**Key Components Used**:
- `Breadcrumb` - Navigation breadcrumbs
- `Filters` - Category-specific filtering
- `ProductCard` - Product display
- `NoProducts` - Empty state handling

### 3. **Product Details Page** (`/product/:id`)
**File**: `src/Components/ProductDetails/index.jsx`

**Purpose**: Detailed product information and purchase options

**Features**:
- Product image gallery
- Detailed specifications
- Price and quantity selection
- Action buttons (Add to Cart, Buy Now)
- Recommended products section

**Key Components Used**:
- `Breadcrumb` - Navigation
- `ProductImageGallery` - Image display
- `ProductHeader` - Title and rating
- `ProductPrice` - Pricing information
- `QuantitySelector` - Quantity controls
- `ActionButtons` - Purchase actions
- `ProductSpecs` - Specifications
- `ProductDescription` - Product details
- `KeyHighlights` - Feature highlights
- `DeliveryInfo` - Shipping information
- `RecommendedProducts` - Product recommendations

## 🧩 Reusable Components

### Core UI Components

#### **Button** (`src/Components/Button/`)
**Purpose**: Reusable button component with multiple variants

**Props**:
- `variant`: 'primary' | 'secondary' | 'danger' | 'ghost'
- `size`: 'small' | 'medium' | 'large'
- `onClick`: Click handler
- `disabled`: Boolean
- `children`: Button content

**Usage**:
```jsx
<Button variant="primary" size="large" onClick={handleClick}>
  Add to Cart
</Button>
```

#### **ProductCard** (`src/Components/ProductCard/`)
**Purpose**: Display product information in card format

**Props**:
- `product`: Product object with all details
- `onClick`: Optional click handler

**Features**:
- Product image, title, price
- Star rating display
- Add to cart button
- Responsive design

#### **Breadcrumb** (`src/Components/Breadcrumb/`)
**Purpose**: Navigation breadcrumb component

**Props**:
- `items`: Array of breadcrumb items
- `onBackClick`: Back button handler
- `showBackButton`: Boolean for back button visibility

### Layout Components

#### **Navbar** (`src/Components/Navbar/`)
**Purpose**: Main navigation bar

**Features**:
- Logo and brand name
- Category dropdown menu
- Mobile-responsive design
- Fixed positioning

#### **Filters** (`src/Components/Filters/`)
**Purpose**: Product filtering sidebar

**Features**:
- Category filtering
- Brand filtering
- Price range slider
- Rating filtering
- Clear all filters

### Display Components

#### **ProductImageGallery** (`src/Components/ProductImageGallery/`)
**Purpose**: Product image display with thumbnails

**Features**:
- Main image display
- Thumbnail gallery
- Image counter
- Responsive sizing

#### **ProductPrice** (`src/Components/ProductPrice/`)
**Purpose**: Product pricing display

**Features**:
- Current price
- Original price (with strikethrough)
- Discount percentage
- Savings calculation

#### **StarRating** (`src/Components/StarRating/`)
**Purpose**: Star rating display

**Features**:
- Visual star representation
- Half-star support
- Rating number display
- Consistent styling

### State Management Components

#### **Loading** (`src/Components/Loading/`)
**Purpose**: Loading state display

**Features**:
- Overlay loader with spinner
- Customizable message
- Multiple size variants

#### **Error** (`src/Components/Error/`)
**Purpose**: Error state display

**Features**:
- Error message display
- Retry functionality
- Consistent error styling

#### **NoProducts** (`src/Components/NoProducts/`)
**Purpose**: Empty state display

**Features**:
- No products found message
- Customizable title and subtitle
- Call-to-action buttons

## 🎣 Custom Hooks

### Product Hooks

#### **useProducts** (`src/hooks/products/useProducts.js`)
**Purpose**: Fetch and manage all products

**Returns**:
- `allProducts`: Array of all products
- `isLoading`: Loading state
- `errorMessage`: Error message if any

**Usage**:
```jsx
const { allProducts, isLoading, errorMessage } = useProducts();
```

#### **useProduct** (`src/hooks/products/useProduct.js`)
**Purpose**: Fetch single product by ID

**Parameters**:
- `productId`: Product ID to fetch

**Returns**:
- `product`: Single product object
- `isLoading`: Loading state
- `errorMessage`: Error message if any

#### **useCategoryProducts** (`src/hooks/products/useCategoryProducts.js`)
**Purpose**: Fetch products filtered by category

**Parameters**:
- `category`: Category name to filter by

**Returns**:
- `categoryProducts`: Filtered products array
- `isLoading`: Loading state
- `errorMessage`: Error message if any

#### **useRandomProducts** (`src/hooks/products/useRandomProducts.js`)
**Purpose**: Fetch random products for recommendations

**Parameters**:
- `count`: Number of products to fetch (default: 5)
- `excludeId`: Product ID to exclude

**Returns**:
- `randomProducts`: Array of random products
- `isLoading`: Loading state
- `errorMessage`: Error message if any

### Filter Hooks

#### **useFilters** (`src/hooks/filters/useFilters.js`)
**Purpose**: Manage product filtering state

**Returns**:
- `filterSettings`: Current filter configuration
- `handleFilterChange`: Function to update filters
- `resetAllFilters`: Function to clear all filters

**Filter Settings**:
- `selectedCategories`: Array of selected categories
- `selectedBrands`: Array of selected brands
- `priceRange`: [min, max] price range
- `minRating`: Minimum rating filter

## 🛠️ Utilities

### Product Utilities (`src/utils/products/`)

#### **productUtils.js**
**Purpose**: Product data manipulation functions

**Functions**:
- `getUniqueCategories(products)`: Extract unique categories
- `getUniqueBrands(products)`: Extract unique brands
- `filterProducts(products, filterSettings)`: Filter products by criteria
- `groupProductsByCategory(products)`: Group products by category
- `getCategoriesToShow(productsByCategory)`: Get category names

#### **priceUtils.js**
**Purpose**: Price calculation utilities

**Functions**:
- `calculateOriginalPrice(price, discountPercentage)`: Calculate original price
- `calculateSavings(price, discountPercentage)`: Calculate savings amount

### Constants (`src/constants/index.js`)

**API_ENDPOINTS**: API endpoint configurations
**DEFAULT_FILTERS**: Default filter settings
**RATING_OPTIONS**: Available rating options
**PRICE_LIMITS**: Price range limits

## 🎨 Styling System

### Design System (`src/styles/design-system.css`)
**Purpose**: Centralized design tokens and utility classes

**Features**:
- CSS custom properties (variables)
- Common utility classes
- Reusable component styles
- Consistent spacing and typography

### Common Styles (`src/styles/common.css`)
**Purpose**: Shared component styles

**Features**:
- Back button styling
- Breadcrumb navigation
- Common UI patterns

### Component Styles
Each component has its own `styles.css` file for component-specific styling.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd eCommerce

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## 📁 Project Structure

```
src/
├── Components/                 # Reusable UI components
│   ├── ActionButtons/         # Add to Cart & Buy Now buttons
│   ├── Breadcrumb/            # Navigation breadcrumbs
│   ├── Button/                # Reusable button component
│   ├── CategoryPage/          # Category-specific product page
│   ├── CategorySection/       # Horizontal category display
│   ├── DeliveryInfo/          # Shipping information
│   ├── Error/                 # Error state component
│   ├── Filters/               # Product filtering sidebar
│   ├── KeyHighlights/         # Product feature highlights
│   ├── Loading/               # Loading state component
│   ├── Navbar/                # Main navigation
│   ├── NoProducts/            # Empty state component
│   ├── OverlayLoader/         # Overlay loading spinner
│   ├── ProductCard/           # Product display card
│   ├── ProductDescription/    # Product description
│   ├── ProductDetails/        # Detailed product page
│   ├── ProductHeader/         # Product title and rating
│   ├── ProductImageGallery/   # Product image display
│   ├── ProductPrice/          # Pricing information
│   ├── Products/              # Main products page
│   ├── ProductsHeader/        # Products page header
│   ├── ProductSpecs/          # Product specifications
│   ├── QuantitySelector/      # Quantity selection controls
│   ├── RecommendedProducts/   # Product recommendations
│   └── StarRating/            # Star rating display
├── hooks/                     # Custom React hooks
│   ├── filters/              # Filter-related hooks
│   └── products/             # Product-related hooks
├── utils/                     # Utility functions
│   └── products/             # Product utilities
├── styles/                    # Global styles
│   ├── common.css            # Common component styles
│   └── design-system.css     # Design system
├── constants/                 # Application constants
├── App.jsx                    # Main application component
├── main.jsx                   # Application entry point
└── index.css                  # Global CSS imports
```

## 🔧 Key Features

- **Responsive Design**: Mobile-first approach with flexible layouts
- **Performance Optimized**: Efficient loading and smooth animations
- **Modular Architecture**: Reusable components and clean separation
- **Type Safety**: Consistent prop validation and error handling
- **Accessibility**: Semantic HTML and keyboard navigation
- **Modern UI**: Clean, professional design with smooth interactions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
