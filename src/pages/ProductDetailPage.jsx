
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById, getRelatedProducts } from '../helpers/api';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setIsLoading(true);
        const productData = await getProductById(parseInt(id));
        setProduct(productData);
        
        // Load related products from same category
        const related = await getRelatedProducts(productData.category, parseInt(id));
        setRelatedProducts(related.slice(0, 4));
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load product:', error);
        setIsLoading(false);
      }
    };
    
    if (id) {
      loadProduct();
    }
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="md:flex md:space-x-8">
            <div className="md:w-1/2">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-xl mb-4"></div>
            </div>
            <div className="md:w-1/2">
              <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sorry, the product you're looking for doesn't exist or has been removed.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-6">
        <ol className="flex text-sm">
          <li>
            <Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Home
            </Link>
          </li>
          <li className="mx-2 text-gray-500 dark:text-gray-400">
            /
          </li>
          <li>
            <Link to="/products" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              Products
            </Link>
          </li>
          <li className="mx-2 text-gray-500 dark:text-gray-400">
            /
          </li>
          <li className="text-gray-800 dark:text-gray-200 font-medium truncate">
            {product.name}
          </li>
        </ol>
      </nav>
      
      <div className="md:flex md:space-x-8 mb-16">
        {/* Product Image */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border dark:border-gray-700">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
        
        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}
          </h1>
          
          <div className="flex items-center mb-4">
            <span className="text-gray-500 dark:text-gray-400 text-sm">
              Category: {product.category}
            </span>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg 
                    key={index} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ${
                      index < product.rating 
                        ? 'text-yellow-400' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-500 dark:text-gray-400">
                ({product.reviews} reviews)
              </span>
            </div>
          </div>
          
          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ${product.price.toFixed(2)}
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
              Description
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {product.description}
            </p>
          </div>
          
          {/* Quantity and Add to Cart */}
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
              Quantity
            </label>
            <div className="flex mb-4">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-2 border dark:border-gray-700 rounded-l-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-16 text-center border-y dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-green-500 dark:bg-gray-800 dark:text-white"
              />
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-2 border dark:border-gray-700 rounded-r-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </button>
            <button
              className="flex-1 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Wishlist
            </button>
          </div>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="mb-16">
        <div className="border-b dark:border-gray-700">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'description'
                  ? 'border-green-500 text-green-600 dark:text-green-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'specifications'
                  ? 'border-green-500 text-green-600 dark:text-green-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'reviews'
                  ? 'border-green-500 text-green-600 dark:text-green-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Reviews
            </button>
          </nav>
        </div>
        
        <div className="py-6">
          {activeTab === 'description' && (
            <div>
              <p className="text-gray-600 dark:text-gray-400">
                {product.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-4">
                {product.longDescription || 'Additional product details will be added soon.'}
              </p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border dark:border-gray-700">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900 w-1/3">Category</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">{product.category}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900">Weight</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">0.5 kg</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900">Dimensions</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">10 × 10 × 5 cm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900">Color</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Various</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-900">Material</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">Premium</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="space-y-6">
              {product.reviews > 0 ? (
                <>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">JS</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">John Smith</h4>
                        <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">
                          3 days ago
                        </span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, index) => (
                          <svg 
                            key={index}
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-4 w-4 ${
                              index < 4 
                                ? 'text-yellow-400' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Great product! Exactly as described and arrived quickly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">AD</span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-1">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">Alice Doe</h4>
                        <span className="text-gray-500 dark:text-gray-400 text-xs ml-2">
                          1 week ago
                        </span>
                      </div>
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, index) => (
                          <svg 
                            key={index}
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-4 w-4 ${
                              index < 5 
                                ? 'text-yellow-400' 
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Love this product! The quality is excellent and it's even better than I expected. Would definitely recommend to anyone looking for something like this.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400">
                    This product has no reviews yet. Be the first to leave one!
                  </p>
                </div>
              )}
              
              <div className="mt-8 border-t dark:border-gray-700 pt-8">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Write a Review
                </h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
                      Rating
                    </label>
                    <div className="flex">
                      {[...Array(5)].map((_, index) => (
                        <button 
                          key={index}
                          type="button"
                          className="text-gray-300 dark:text-gray-600 hover:text-yellow-400"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-900 dark:text-gray-200 mb-2">
                      Your Review
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      className="w-full border dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Write your review here..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Related Products
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
