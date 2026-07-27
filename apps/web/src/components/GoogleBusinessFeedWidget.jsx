import React from 'react';
import { Star } from 'lucide-react';

const GoogleBusinessFeedWidget = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-200">
        <Star
          className="h-5 w-5 fill-amber-400 text-amber-400"
          aria-hidden="true"
        />
        <span className="text-sm font-semibold text-foreground">
          Locally Owned &amp; Operated in Asheville
        </span>
      </div>
    </div>
  );
};

export default GoogleBusinessFeedWidget;