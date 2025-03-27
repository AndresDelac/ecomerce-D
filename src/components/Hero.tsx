
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10 pt-10 md:pt-0">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block animate-on-scroll">
            <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-8 inline-block">
              Introducing Buenass
            </span>
          </div>
          
          <h1 className="animate-on-scroll text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl">
            <span className="shimmer-text">Minimal design. </span>
            <span className="shimmer-text">Maximum impact.</span>
          </h1>
          
          <p className="animate-on-scroll text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 delay-100">
            Experience a new level of design that combines simplicity with functionality. Every detail carefully crafted for your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll delay-200">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="glass-button">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Device mockup */}
        <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto animate-on-scroll delay-300">
          <div className="relative overflow-hidden rounded-xl shadow-2xl glass-morphism">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 h-8 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="bg-white aspect-video w-full">
              <div className="h-full w-full bg-gradient-radial from-primary/5 to-primary/10 flex items-center justify-center">
                <p className="text-xl text-primary/80 font-medium">Your incredible content here</p>
              </div>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute -bottom-6 -right-6 md:-right-10 glass-card rounded-lg p-4 shadow-lg animate-float">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium">Perfect Design</p>
                <p className="text-xs text-muted-foreground">Premium quality</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -left-6 md:-left-10 glass-card rounded-lg p-4 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary">★</span>
              </div>
              <div>
                <p className="text-sm font-medium">Premium Features</p>
                <p className="text-xs text-muted-foreground">Everything you need</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
