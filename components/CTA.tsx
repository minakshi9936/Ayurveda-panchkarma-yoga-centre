import React from 'react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="bg-green-600 text-white py-12 px-4 md:px-8 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Ready to Experience Abhyanga?</h2>
        <p className="text-lg mb-6">
          Book your session today and start your journey to wellness.
        </p>
        <Button size="lg" variant="secondary">
          Book Now
        </Button>
      </div>
    </section>
  );
}
