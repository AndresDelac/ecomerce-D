
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartDropdown = ({ onClose }) => {
  const { cartItems, cartTotal, removeFromCart } = useCart();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-50"
    >
      <div className="p-4 border-b dark:border-gray-700">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Your Cart</h3>
      </div>
      
      <div className="max-h-96 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
            Your cart is empty
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <div key={item.id} className="p-4 border-b dark:border-gray-700 flex items-center gap-3">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="Remove item"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}

            <div className="p-4 bg-gray-50 dark:bg-gray-900">
              <div className="flex justify-between mb-4">
                <span className="font-medium text-gray-900 dark:text-white">Total:</span>
                <span className="font-bold text-gray-900 dark:text-white">${cartTotal.toFixed(2)}</span>
              </div>
              
              <Link 
                to="/cart" 
                onClick={onClose}
                className="block w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md text-center transition-colors"
              >
                View Cart
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
