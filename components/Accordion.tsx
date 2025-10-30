import React from 'react';
import {
  Accordion as UIAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

interface FAQItem {
  q: string;
  a: string;
}

interface AccordionProps {
  faq: FAQItem[];
}

export default function Accordion({ faq }: AccordionProps) {
  return (
    <UIAccordion type="single" collapsible className="w-full">
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.q}</AccordionTrigger>
          <AccordionContent>{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </UIAccordion>
  );
}
