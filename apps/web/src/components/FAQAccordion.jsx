
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQAccordion = ({ faqs }) => {
  if (!faqs || faqs.length === 0) return null;

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-border">
          <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base leading-relaxed">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
