'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import HeroSlider from '@/components/HeroSlider';
import { Droplets, Sparkles, Heart, Users, Flower2, Activity, ShieldCheck, HandHeart, Timer } from 'lucide-react';

export default function Home() {
  const services = [
    {
      title: 'Panchakarma',
      description: 'Traditional five-step detoxification and rejuvenation therapy to cleanse body and mind.',
      icon: Droplets,
      href: '/services#panchakarma',
    },
    {
      title: 'Abhyanga',
      description: 'Therapeutic full-body oil massage to improve circulation and promote deep relaxation.',
      icon: Sparkles,
      href: '/services#abhyanga',
    },
    {
      title: 'Shirodhara',
      description: 'Warm oil gently poured on the forehead to calm the nervous system and reduce stress.',
      icon: Heart,
      href: '/services#shirodhara',
    },
    {
      title: 'Yoga Sessions',
      description: 'Personalized yoga practice combining asanas, pranayama, and meditation for balance.',
      icon: Activity,
      href: '/services#yoga',
    },
    {
      title: 'Detox Package',
      description: 'Comprehensive cleansing program to eliminate toxins and restore natural vitality.',
      icon: Flower2,
      href: '/services#detox',
    },
    {
      title: "Women's Wellness",
      description: 'Specialized therapies for hormonal balance, fertility, and feminine health.',
      icon: Users,
      href: '/services#womens-wellness',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      review:
        'After years of chronic knee pain, the Panchakarma treatment here completely transformed my life. I can walk pain-free now!',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      review:
        'The personalized yoga sessions and Ayurvedic consultation helped me manage my diabetes naturally. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Anjali Menon',
      review:
        'The Shirodhara therapy was incredibly relaxing. Never felt so calm. Doctors are very knowledgeable.',
      rating: 5,
    },
  ];

  return (
    <>
      {/* ========= HERO ========= */}
      <HeroSlider />

      {/* ========= TREATMENTS / SERVICES ========= */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Treatments & Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover personalized Ayurvedic therapies designed to restore balance and promote lasting wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ========= ABOUT ========= */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Over 25 Years of Trusted Ayurvedic Care
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded by renowned Ayurvedic physicians, our centre has been a sanctuary for holistic healing since 1998.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We blend traditional practices with modern diagnosis to offer fully personalized healing.
              </p>

              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========= WHY CHOOSE US ========= */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <ShieldCheck className="mx-auto h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Certified Experts</h3>
              <p className="text-muted-foreground">
                Experienced Ayurvedic doctors & licensed therapists providing authentic treatments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Timer className="mx-auto h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
              <p className="text-muted-foreground">
                Enjoy online & offline consultations, therapy slots & yoga sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <HandHeart className="mx-auto h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-muted-foreground">
                Each plan is tailored to your body type, health condition & lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========= TESTIMONIALS ========= */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Patients Say</h2>
            <p className="text-lg text-muted-foreground">
              Real stories from people who found healing through Ayurveda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ========= CTA ========= */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Schedule a consultation with our expert Ayurvedic physicians and discover natural solutions.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
            <Link href="/contact">Book Your Appointment Today</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

