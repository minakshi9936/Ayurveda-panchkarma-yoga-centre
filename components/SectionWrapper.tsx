import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={cn('py-12 px-4 md:px-8', className)}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
}
