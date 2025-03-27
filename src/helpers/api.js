
// Mock data for our e-commerce store
const products = [
  {
    id: 1,
    name: "Smart Watch Pro",
    price: 199.99,
    description: "Advanced smartwatch with health tracking and notifications.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviews: 124
  },
  {
    id: 2,
    name: "Premium Laptop Backpack",
    price: 89.99,
    description: "Stylish and durable backpack with laptop compartment.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    reviews: 89
  },
  {
    id: 3,
    name: "Wireless Noise-Cancelling Headphones",
    price: 249.99,
    description: "Premium headphones with active noise cancellation.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviews: 201
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Comfortable and sustainable cotton t-shirt.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.3,
    reviews: 56
  },
  {
    id: 5,
    name: "Essential Oil Diffuser",
    price: 39.99,
    description: "Stylish diffuser for aromatherapy and home fragrance.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviews: 112
  },
  {
    id: 6,
    name: "Moisturizing Face Cream",
    price: 24.99,
    description: "Hydrating face cream for all skin types.",
    category: "Beauty",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.4,
    reviews: 78
  },
  {
    id: 7,
    name: "Stainless Steel Water Bottle",
    price: 34.99,
    description: "Durable water bottle that keeps drinks cold for 24 hours.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    reviews: 143
  },
  {
    id: 8,
    name: "Bamboo Cutting Board",
    price: 49.99,
    description: "Eco-friendly bamboo cutting board for kitchen use.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.2,
    reviews: 36
  },
  {
    id: 9,
    name: "Ceramic Plant Pot",
    price: 19.99,
    description: "Beautiful ceramic pot for indoor plants.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.0,
    reviews: 27
  },
  {
    id: 10,
    name: "Fitness Tracker Band",
    price: 79.99,
    description: "Waterproof fitness tracker with heart rate monitoring.",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    reviews: 92
  },
  {
    id: 11,
    name: "Cashmere Scarf",
    price: 59.99,
    description: "Soft and warm cashmere scarf for cold weather.",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1601379329542-31c59347e2b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    reviews: 43
  },
  {
    id: 12,
    name: "Leather Wallet",
    price: 44.99,
    description: "Genuine leather wallet with multiple card slots.",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    reviews: 68
  }
];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get all products
export const getProducts = async () => {
  // Simulate API call
  await delay(800);
  return [...products];
};

// Get a single product by ID
export const getProductById = async (id) => {
  await delay(600);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    throw new Error('Product not found');
  }
  
  return product;
};

// Get related products (same category, excluding current product)
export const getRelatedProducts = async (category, currentProductId) => {
  await delay(500);
  return products.filter(p => p.category === category && p.id !== currentProductId);
};

// Search products
export const searchProducts = async (query) => {
  await delay(500);
  const lowerCaseQuery = query.toLowerCase();
  
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerCaseQuery) || 
    p.description.toLowerCase().includes(lowerCaseQuery) ||
    p.category.toLowerCase().includes(lowerCaseQuery)
  );
};
