import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getFaqData } from '@/data/faqData.js';

const FAQSection = ({ location = 'Asheville', showHeader = true }) => {
  const faqCategories = getFaqData(location);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our professional pet waste removal services in {location}.
            </p>
          </div>
        )}

        {faqCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border/50">
              {category.title}
            </h3>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {category.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${categoryIndex}-${index}`}
                  className="bg-card border border-border rounded-xl px-6 shadow-sm data-[state=open]:border-primary/20 data-[state=open]:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;