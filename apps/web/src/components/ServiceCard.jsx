import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, benefits, mostPopular }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative h-full"
    >
      {/* Glow effect for most popular card */}
      {mostPopular && (
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300 -z-10" />
      )}

      <div
        className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-300 ${
          mostPopular
            ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-2xl shadow-primary/20 scale-105 md:scale-100'
            : 'bg-card border border-border shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1'
        }`}
      >
        {/* Enhanced Most Popular Badge */}
        {mostPopular && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute -top-6 left-1/2 -translate-x-1/2 z-20"
          >
            <div className="relative">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-60 animate-pulse" />
              
              {/* Badge container */}
              <div className="relative bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-full font-bold text-lg shadow-2xl shadow-primary/40 border-2 border-primary-foreground/20 flex items-center gap-2 whitespace-nowrap">
                <span className="text-2xl">â­</span>
                <span className="tracking-wide text-xl">MOST POOPULAR</span>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">{description}</p>

          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${mostPopular ? 'text-primary' : 'text-secondary'}`} />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <Button
          asChild
          className={`w-full mt-8 h-12 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] ${
            mostPopular
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
          }`}
        >
          <Link to="/quote">Get Started</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;