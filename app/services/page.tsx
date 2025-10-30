import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Sparkles, Heart, Users, Flower2, Activity, Clock, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'panchakarma',
      title: 'Panchakarma Therapy',
      icon: Droplets,
      duration: '7-21 days',
      description: 'A comprehensive five-step detoxification and rejuvenation program designed to cleanse the body at a cellular level and restore balance to the doshas.',
      benefits: [
        'Deep detoxification and elimination of toxins',
        'Strengthened immune system',
        'Improved digestion and metabolism',
        'Enhanced mental clarity and focus',
        'Rejuvenated skin and overall vitality',
      ],
      image: 'https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'abhyanga',
      title: 'Abhyanga Massage',
      icon: Sparkles,
      duration: '60-90 minutes',
      description: 'A therapeutic full-body warm oil massage performed by trained therapists to improve circulation, nourish tissues, and promote deep relaxation.',
      benefits: [
        'Improved blood circulation',
        'Reduced stress and anxiety',
        'Enhanced skin health and glow',
        'Relief from muscle tension',
        'Better sleep quality',
      ],
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'shirodhara',
      title: 'Shirodhara',
      icon: Heart,
      duration: '45-60 minutes',
      description: 'A profoundly calming treatment where warm medicated oil is gently poured in a continuous stream on the forehead, calming the nervous system.',
      benefits: [
        'Deep mental relaxation',
        'Relief from insomnia and headaches',
        'Reduced anxiety and stress',
        'Improved concentration',
        'Balanced nervous system',
      ],
      image: 'https://images.pexels.com/photos/3865796/pexels-photo-3865796.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'yoga',
      title: 'Yoga Sessions',
      icon: Activity,
      duration: '60-90 minutes',
      description: 'Personalized yoga practice combining traditional asanas, pranayama (breathing techniques), and meditation tailored to your constitution and health goals.',
      benefits: [
        'Increased flexibility and strength',
        'Better posture and alignment',
        'Enhanced respiratory function',
        'Stress reduction',
        'Mind-body balance',
      ],
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'detox',
      title: 'Detox Package',
      icon: Flower2,
      duration: '3-14 days',
      description: 'A comprehensive cleansing program combining multiple therapies, herbal medicines, and dietary guidance to eliminate accumulated toxins.',
      benefits: [
        'Complete body purification',
        'Weight management support',
        'Boosted energy levels',
        'Clearer skin complexion',
        'Improved digestive health',
      ],
      image: 'https://images.pexels.com/photos/4498292/pexels-photo-4498292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'womens-wellness',
      title: "Women's Wellness",
      icon: Users,
      duration: 'Varies',
      description: 'Specialized Ayurvedic therapies addressing hormonal balance, fertility, pregnancy care, postpartum recovery, and menopause management.',
      benefits: [
        'Hormonal balance restoration',
        'Menstrual cycle regulation',
        'Fertility enhancement',
        'Relief from PCOS/PCOD symptoms',
        'Postpartum rejuvenation',
      ],
      image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Ayurvedic Treatments & Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover authentic Ayurvedic therapies tailored to your unique constitution and health needs.
            Each treatment is administered by certified practitioners using traditional methods and premium natural ingredients.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                </div>
              </div>

              <Card className={`border-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{service.title}</CardTitle>
                  <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-primary mr-2" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asChild className="w-full mt-6 bg-primary hover:bg-primary/90">
                    <Link href="/contact">Book This Treatment</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Not Sure Which Treatment Is Right for You?
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Schedule a consultation with our Ayurvedic physicians. We&apos;ll assess your constitution, understand your health concerns,
            and create a personalized treatment plan just for you.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
