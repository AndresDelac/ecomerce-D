
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10',
        isScrolled ? 'nav-blur' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-semibold tracking-tight">Buenass</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Home
          </Link>
          <Link to="#features" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Features
          </Link>
          <Link to="#about" className="text-sm font-medium hover:text-primary/80 transition-colors">
            About
          </Link>
          <Link to="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
            Contact
          </Link>
        </div>

        <div className="hidden md:block">
          <Button variant="outline" className="mr-2 glass-button">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 flex-col items-center justify-center bg-background/95 backdrop-blur-lg md:hidden transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'flex' : 'hidden'
        )}
      >
        <div className="flex flex-col items-center space-y-6 py-8">
          <Link
            to="/"
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="#features"
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            to="#about"
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="#contact"
            className="text-lg font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-6 space-y-3 w-full px-8 flex flex-col items-center">
            <Button
              variant="outline"
              className="w-full glass-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign In
            </Button>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
