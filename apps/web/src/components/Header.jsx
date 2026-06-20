
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'Dog Poop Removal', path: '/services' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Service Areas', path: '/near-me' },
    { name: 'One-Time Cleanup', path: '/one-time-cleanup' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/quote' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-3 lg:h-20 lg:py-0 gap-3 lg:gap-0">
          
          {/* Logo & CTA Row (Mobile view keeps them inline) */}
          <div className="flex items-center justify-between w-full lg:w-auto">
            <Link to="/" className="flex items-center space-x-2 transition-opacity hover:opacity-90 outline-none rounded-md focus-visible:ring-2 focus-visible:ring-primary">
              <img 
                src="/logo-scoopy-asheville.png" 
                alt="Scoopy Chatt pet waste removal logo" 
                className="w-[60px] md:w-[75px] h-auto object-contain"
              />
            </Link>
            
            {/* Mobile Actions */}
            <div className="flex lg:hidden items-center space-x-3">
              <a href="tel:828-844-8060" className="text-primary hover:text-primary/80 transition-colors p-2">
                <Phone className="h-5 w-5" />
              </a>
              <Button asChild size="sm" className="bg-primary text-primary-foreground font-bold shadow-md h-9">
                <Link to="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Horizontal Navigation */}
          <nav className="flex items-center justify-start lg:justify-center space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar w-full lg:w-auto -mx-4 px-4 lg:mx-0 lg:px-0 pb-1 lg:pb-0" aria-label="Main Navigation">
            {mainLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 sm:px-4 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0 ${
                  isActive(link.path) ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:828-844-8060"
              className="flex items-center space-x-2 px-3 py-2 text-sm font-bold text-foreground hover:text-primary transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>828-844-8060</span>
            </a>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] h-12 px-6 rounded-xl font-bold shadow-md">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
