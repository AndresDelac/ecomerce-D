
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, name, price, image, category } = product;

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl dark:shadow-gray-900/30 overflow-hidden transition-all duration-300 flex flex-col h-full">
      <Link to={`/products/${id}`} className="relative block overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute top-2 left-2">
          <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
      </Link>
      
      <div className="p-4 flex-1 flex flex-col">
        <Link to={`/products/${id}`} className="block mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mt-auto">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${price.toFixed(2)}
          </span>
          
          <button
            onClick={() => addToCart(product)}
            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 p-2 rounded-full hover:bg-green-50 dark:hover:bg-green-900/30 transition-colors"
            aria-label={`Add ${name} to cart`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
