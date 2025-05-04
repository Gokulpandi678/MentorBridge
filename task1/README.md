# Tak 1 - Product Management System 

This documentation covers a JavaScript-based product management system that allows for managing a collection of products with various operations.

## Table of Contents
- [Data Structure](#data-structure)
- [Core Functions](#core-functions)
  - [Display Products](#display-products)
  - [Filter Products by Category](#filter-products-by-category)
  - [Find Product by ID](#find-product-by-id)
  - [Apply Discount](#apply-discount)
  - [Update Stock](#update-stock)
  - [Calculate Total Inventory Value](#calculate-total-inventory-value)
  - [Add Product Tag](#add-product-tag)
  - [Remove Product](#remove-product)
- [Example Usage](#example-usage)

## Data Structure

The system uses an array of product objects with the following structure:

```javascript
{
    productId: Number,        
    name: String,             
    description: String,          
    price: Number,               
    stock: Number,                
    category: String,            
    tags: Array<String>,         
    discount: {                  
        type: String,            
        value: Number             
    }
}
```

## Core Functions

### Display Products

```javascript
const displayProducts = (product) => { ... }
```

Prints details of a product to the console, including its discount information if available.

### Filter Products by Category

```javascript
const filterProductByCategory = (category) => { ... }
```

**Parameters:**
- `category` (String): The category to filter by

**Returns:** An array of products matching the specified category.

### Find Product by ID

```javascript
const findProductById = (id) => { ... }
```

**Parameters:**
- `id` (Number): The product ID to search for

**Returns:** The product object if found, or undefined if not found.

### Apply Discount

The system uses a module pattern to encapsulate discount functionality:

```javascript
const discountModule = (() => {
    const applyDiscount = (productId) => { ... }
    return { applyDiscount: applyDiscount };
})()
```

**Usage:**
```javascript
discountModule.applyDiscount(productId);
```

Applies the configured discount to a product:
- For fixed discounts: Subtracts the discount value from the price
- For percentage discounts: Reduces the price by the specified percentage

### Update Stock

```javascript
const updateStock = (productId, newQty) => { ... }
```

**Parameters:**
- `productId` (Number): The ID of the product to update
- `newQty` (Number): The new stock quantity

Updates the stock quantity for a specific product and displays the updated product information.

### Calculate Total Inventory Value

```javascript
const evalTotalPrice = () => { ... }
```

**Returns:** The total value of all products in inventory (price × stock).

### Add Product Tag

```javascript
const addProductTag = (productId, tag) => { ... }
```

**Parameters:**
- `productId` (Number): The ID of the product to update
- `tag` (String): The new tag to add

Adds a new tag to a product's tags array if it doesn't already exist.

### Remove Product

```javascript
const removeProduct = (productId) => { ... }
```

**Parameters:**
- `productId` (Number): The ID of the product to remove

Removes a product from the products array.

## Example Usage

```javascript
// Display all products
products.forEach(product => displayProducts(product));

// Filter products by category
const footwearProducts = filterProductByCategory('Footwear');

// Find a product by ID
const product = findProductById(1);

// Apply discount to a product
discountModule.applyDiscount(3);

// Update stock quantity
updateStock(3, 500);

// Calculate total inventory value
const totalValue = evalTotalPrice();

// Add a tag to a product
addProductTag(3, 'clothes');

// Remove a product
removeProduct(4);
```

The system helps manage products with operations for displaying, filtering, finding, updating stock, calculating inventory value, managing tags, and removing products from inventory.