import React from 'react';

const BenefitCard = ({ icon: Icon, title, description, variant = 'default' }) => {
  return (
    <div className={`flex flex-col h-full rounded-xl p-6 transition-all duration-300 ${
      variant === 'elevated' 
        ? 'bg-card shadow-lg hover:shadow-xl' 
        : 'bg-muted hover:bg-muted/80'
    }`}>
      <div className="flex items-center space-x-3 mb-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-balance">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;