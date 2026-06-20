import React from 'react';
import { Star } from 'lucide-react';

const GoogleBusinessFeedWidget = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 fill-amber-400 text-amber-400"
              aria-hidden="true"
            />
          ))}
        </div>
        <span className="text-sm font-semibold text-foreground">
          85+ 5-Star Reviews
        </span>
      </div>
    </div>
  );
};

export default GoogleBusinessFeedWidget;