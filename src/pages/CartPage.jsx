
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toLowerCase() === 'discount10') {
      setDiscount(cartTotal * 0.1);
      setCouponApplied(true);
    }
  };
  
  const finalTotal = cartTotal - discount;
  const shippingCost = 10;
  const tax = finalTotal * 0.05;
  const grandTotal = finalTotal + shippingCost + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Your Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 dark:text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Link 
            to="/products" 
            className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8 mb-8 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-6">
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-24 sm:h-24 flex-shrink-0 mb-4 sm:mb-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="sm:ml-6 flex-1 flex flex-col">
                        <div className="flex justify-between">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                            <Link to={`/products/${item.id}`} className="hover:text-green-600 dark:hover:text-green-400 transition-colors">
                              {item.name}
                            </Link>
                          </h3>
                          <p className="text-lg font-medium text-gray-900 dark:text-white ml-4">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Category: {item.category}
                        </p>
                        <div className="mt-4 flex-1 flex items-end justify-between">
                          <div className="flex items-center border dark:border-gray-700 rounded-lg">
                            <button 
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="px-3 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-l-lg transition-colors"
                            >
                              -
                            </button>
                            <span className="px-4 py-1 text-gray-900 dark:text-white">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-r-lg transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="p-6 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
                <button 
                  onClick={clearCart}
                  className="text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                >
                  Clear Cart
                </button>
                <Link 
                  to="/products" 
                  className="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Cart Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                {couponApplied && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t dark:border-gray-700 pt-4 mt-4">
                  <div className="flex justify-between text-xl font-medium text-gray-900 dark:text-white">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Coupon Code */}
              <div className="mt-6">
                <form onSubmit={applyCoupon}>
                  <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Coupon Code (try "DISCOUNT10")
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={couponApplied}
                      className="flex-1 border dark:border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400"
                      placeholder="Enter code"
                    />
                    <button
                      type="submit"
                      disabled={couponApplied}
                      className="bg-green-600 text-white font-medium px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600"
                    >
                      Apply
                    </button>
                  </div>
                  {couponApplied && (
                    <p className="mt-2 text-sm text-green-600 dark:text-green-400">
                      Coupon applied successfully!
                    </p>
                  )}
                </form>
              </div>
              
              <div className="mt-6">
                <button
                  className="w-full bg-green-600 text-white font-medium py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
