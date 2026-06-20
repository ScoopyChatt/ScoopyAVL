import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border p-4 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
        <a href="tel:828-844-8060" className="flex items-center justify-center gap-2 flex-1 py-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
          <Phone className="h-4 w-4 text-primary" />
          828-844-8060
        </a>
        <Button asChild className="flex-1 bg-[#FF9E30] text-white hover:bg-[#FF9E30]/90 shadow-lg active:scale-95 transition-transform">
          <Link to="/quote">
            <CalendarCheck className="h-4 w-4 mr-2" />
            Get Quote
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;