
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const ServiceAreaGrid = ({ areas }) => {
  if (!areas || areas.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {areas.map((area, idx) => (
        <Link 
          key={idx} 
          to={`/service/${area.toLowerCase().replace(/ /g, '-')}`}
          className="flex items-center p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 group"
        >
          <div className="bg-primary/10 p-2 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
            {area}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default ServiceAreaGrid;
