
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils.js';

const CTAButton = ({ 
  to = '/quote', 
  children = 'Get a Free Quote', 
  variant = 'default', 
  size = 'lg', 
  className,
  icon: Icon,
  ...props 
}) => {
  return (
    <Button 
      asChild 
      size={size} 
      variant={variant}
      className={cn(
        "transition-all duration-300 active:scale-[0.98] font-bold shadow-lg hover:shadow-xl",
        variant === 'default' && "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === 'outline' && "border-2 hover:bg-muted",
        className
      )}
      {...props}
    >
      <Link to={to} className="flex items-center justify-center">
        {children}
        {Icon && <Icon className="ml-2 h-5 w-5" />}
      </Link>
    </Button>
  );
};

export default CTAButton;
