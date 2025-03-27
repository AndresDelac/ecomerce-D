import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../helpers/api';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '../components/ui/carousel';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState(null);

  // Hace el carrusel automatico
  useEffect(() => {
    if (!api) return;

    const autoplayInterval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Auto-scroll cada 5 segundos

    return () => clearInterval(autoplayInterval);
  }, [api]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = await getProducts();
        
        // escoge 4 productos aleatorios
        const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.slice(0, 4));
        
        // 4 de los mas recientes
        setNewArrivals(
          [...allProducts]
            .sort((a, b) => b.id - a.id)
            .slice(0, 4)
        );
        
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to load products:', error);
        setIsLoading(false);
      }
    };
    
    loadProducts();
  }, []);

  const carouselSlides = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Discover our new summer essentials",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Shop Now",
      buttonLink: "/products?category=clothing"
    },
    {
      id: 2,
      title: "Tech Gadgets",
      description: "The latest electronics for your lifestyle",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Explore",
      buttonLink: "/products?category=electronics"
    },
    {
      id: 3,
      title: "Home Essentials",
      description: "Transform your living space",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
      buttonText: "Discover",
      buttonLink: "/products?category=home"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Featured Carousel Section - Smaller Size with Auto-play */}
      <section className="w-full mx-auto max-w-4xl py-8">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {carouselSlides.map((slide) => (
              <CarouselItem key={slide.id} className="relative">
                <div className="h-[40vh] w-full overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center z-20">
                    <div className="container mx-auto px-6 md:px-12">
                      <div className="max-w-sm">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {slide.title}
                        </h2>
                        <p className="text-white/90 text-sm md:text-base mb-4">
                          {slide.description}
                        </p>
                        <Link 
                          to={slide.buttonLink}
                          className="inline-block bg-white text-green-600 font-semibold px-4 py-2 text-sm rounded-lg shadow-lg hover:bg-green-50 transition-colors"
                        >
                          {slide.buttonText}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-30">
            <CarouselPrevious className="relative left-0 translate-x-0 h-8 w-8 rounded-full opacity-70 hover:opacity-100" />
            <CarouselNext className="relative right-0 translate-x-0 h-8 w-8 rounded-full opacity-70 hover:opacity-100" />
          </div>
        </Carousel>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronics', 'Clothing', 'Home', 'Beauty'].map((category) => (
              <Link 
                key={category}
                to={`/products?category=${category.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl text-gray-400 dark:text-gray-500 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                        {category === 'Electronics' && '💻'}
                        {category === 'Clothing' && '👕'}
                        {category === 'Home' && '🏠'}
                        {category === 'Beauty' && '✨'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {category}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Products
            </h2>
            <Link 
              to="/products" 
              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium"
            >
              View All →
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              New Arrivals
            </h2>
            <Link 
              to="/products" 
              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium"
            >
              View All →
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 animate-pulse">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {newArrivals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg mb-6 opacity-90">
              Stay updated with our latest products and exclusive offers
            </p>
            
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
