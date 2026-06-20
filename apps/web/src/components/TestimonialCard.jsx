
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, location, rating = 5 }) => {
  return (
    <div className="bg-card p-6 md:p-8 rounded-2xl shadow-sm border border-border h-full flex flex-col">
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <blockquote className="text-lg text-foreground font-medium italic mb-6 flex-grow leading-relaxed">
        "{quote}"
      </blockquote>
      <div className="mt-auto pt-4 border-t border-border/50">
        <div className="font-bold text-foreground">{author}</div>
        <div className="text-sm text-muted-foreground">{location}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
