import React from 'react';
import { MapPin } from 'lucide-react';
import ServiceAreaGrid from '@/components/ServiceAreaGrid.jsx';
import CTAButton from '@/components/CTAButton.jsx';
import { serviceAreas } from '@/data/serviceAreas.js';
const LocationSection = () => {
  return <section className="section-spacing bg-muted/30 border-y border-border">
      <div className="container-shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 sticky top-24">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase">
              <MapPin className="w-4 h-4 mr-2" />
              Service Areas
            </div>
            <h2 className="mb-6">Serving Asheville & Surrounding Communities</h2>
            <p className="text-muted-foreground mb-8">
              We provide professional dog waste removal services across the Greater Asheville area. Check our list to see if we're currently scooping in your neighborhood.
            </p>
            <CTAButton to="/quote" className="w-full sm:w-auto">Check Availability</CTAButton>
          </div>
          
          <div className="lg:col-span-8">
            <ServiceAreaGrid areas={serviceAreas} />
          </div>
        </div>
      </div>
    </section>;
};
export default LocationSection;