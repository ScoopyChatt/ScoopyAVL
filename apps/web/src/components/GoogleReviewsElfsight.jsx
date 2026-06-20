
import React from 'react';
import { motion } from 'framer-motion';

const GoogleReviewsElfsight = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. See why pet owners across Asheville trust Scoopy Doo to keep their yards clean.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex justify-center min-h-[300px]"
        >
          <div 
            className="w-full"
            dangerouslySetInnerHTML={{ 
              __html: '<script src="https://elfsightcdn.com/platform.js" async></script><div class="elfsight-app-8240dd2e-e144-493a-add7-52c8fd1b05f7" data-elfsight-app-lazy></div>' 
            }} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviewsElfsight;
