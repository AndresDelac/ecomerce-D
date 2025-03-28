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
      image: "https://blog.grupoemerita.com/hs-fs/hubfs/Emerita-Decoracion-Casas-01.jpg?width=1200&height=700&name=Emerita-Decoracion-Casas-01.jpg",
      buttonText: "Discover",
      buttonLink: "/products?category=home"
    }
  ];

  return (
  <div className="min-h-screen">
    {/* Ancho del carruel */}
    <section className="w-full mx-auto max-w-6xl py-8">
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {carouselSlides.map((slide) => (
            <CarouselItem key={slide.id} className="relative group">
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Contenido de texto reposicionado */}
                <div className="absolute bottom-8 left-8 right-8 z-20 text-left md:bottom-12 md:left-12">
                  <div className="max-w-md">
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-white/90 text-sm md:text-lg mb-6">
                      {slide.description}
                    </p>
                    <Link 
                      to={slide.buttonLink}
                      className="inline-block bg-white text-green-600 font-semibold px-6 py-3 text-sm md:text-base rounded-lg shadow-lg hover:bg-green-50 transition-all hover:scale-105"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Controles personalizados */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-4 z-30">
          <CarouselPrevious className="relative left-0 translate-x-0 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-none text-white hover:text-green-400" />
          <CarouselNext className="relative right-0 translate-x-0 h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-none text-white hover:text-green-400" />
        </div>
      </Carousel>
    </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Nuestras Categorias
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Electronico', 'Ropa', 'Hogar', 'Belleza'].map((category) => (
              <Link 
                key={category}
                to={`/products?category=${category.toLowerCase()}`}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-700 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl text-gray-400 dark:text-gray-500 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors">
                        {category === 'Electronico' && '💻'}
                        {category === 'Ropa' && '👕'}
                        {category === 'Hogar' && '🏠'}
                        {category === 'Belleza' && '✨'}
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
              Productos destacados
            </h2>
            <Link 
              to="/products" 
              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-medium"
            >
              Ver Todo →
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
    </div>
  );
};

export default HomePage;
