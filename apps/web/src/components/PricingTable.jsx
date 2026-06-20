
import React from 'react';
import { CheckCircle2, Info } from 'lucide-react';
import CTAButton from '@/components/CTAButton.jsx';
import { cn } from '@/lib/utils.js';

const PricingTable = ({ tiers }) => {
  return (
    <div className="space-y-6">
      {tiers.map((tier, index) => (
        <div 
          key={index} 
          className={cn(
            "pricing-row relative overflow-hidden",
            tier.recommended ? "border-2 border-primary shadow-md" : ""
          )}
        >
          {tier.recommended && (
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider z-10">
              Most Popular
            </div>
          )}
          
          <div className="lg:w-1/4">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
            <p className="text-muted-foreground text-sm">{tier.description}</p>
          </div>
          
          <div className="lg:w-1/4 flex flex-col">
            <div className="flex items-baseline text-foreground">
              <span className="text-sm font-semibold mt-1 mr-1 text-muted-foreground">Starts at</span>
              <span className="text-3xl md:text-4xl font-extrabold tabular-numbers-pricing">${tier.price}</span>
            </div>
            <span className="text-muted-foreground font-medium text-sm mt-1">{tier.frequency}</span>
          </div>
          
          <div className="lg:w-1/3">
            <ul className="space-y-2">
              {tier.benefits.map((benefit, bIndex) => (
                <li key={bIndex} className="flex items-start text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/6 flex justify-end w-full">
            <CTAButton to="/quote" variant={tier.recommended ? "default" : "outline"} className="w-full">
              Get Quote
            </CTAButton>
          </div>
        </div>
      ))}
      
      <div className="bg-muted p-6 rounded-2xl flex items-start space-x-4 border border-border">
        <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        <p className="text-sm text-muted-foreground">
          <strong>Pricing Note:</strong> Prices listed are starting rates per visit for an average-sized yard with 1 dog. Additional dogs and significantly oversized yards may incur a small additional fee per visit.
        </p>
      </div>
    </div>
  );
};

export default PricingTable;
