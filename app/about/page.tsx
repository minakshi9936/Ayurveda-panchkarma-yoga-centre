import { Award, Users, Heart, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function AboutPage() {
  const stats = [
    { icon: Users, label: 'Patients Treated', value: '50,000+' },
    { icon: Clock, label: 'Years of Experience', value: '25+' },
    { icon: Award, label: 'Certified Practitioners', value: '15' },
    { icon: Heart, label: 'Success Rate', value: '95%' },
  ];

  const team = [
    {
      name: 'Dr. Rajeev Menon',
      role: 'Chief Ayurvedic Physician',
      qualification: 'BAMS, MD (Ayu), PhD',
      description: 'With over 30 years of experience, Dr. Menon specializes in Panchakarma and chronic disease management.',
    },
    {
      name: 'Dr. Lakshmi Nair',
      role: 'Senior Ayurvedic Consultant',
      qualification: 'BAMS, MD (Ayu)',
      description: "Expert in women's wellness, fertility care, and lifestyle disorders with 20 years of clinical practice.",
    },
    {
      name: 'Yoga Acharya Suresh Kumar',
      role: 'Head Yoga Instructor',
      qualification: 'Certified Yoga Teacher (500 RYT)',
      description: 'Specializes in therapeutic yoga for spine health, stress management, and chronic pain relief.',
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Ayurvedic Physician',
      qualification: 'BAMS',
      description: 'Focuses on skin disorders, digestive health, and detoxification therapies with a holistic approach.',
    },
  ];

  const credentials = [
    'Recognized by Ministry of AYUSH, Government of India',
    'ISO 9001:2015 Certified Healthcare Facility',
    'Member of National Ayurvedic Medical Association',
    'Accredited by Quality Council of India',
    'Excellence Award for Traditional Healthcare 2022',
    'Best Panchakarma Centre - State Award 2020',
  ];

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About AyurVeda Centre
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              A legacy of authentic Ayurvedic healing, where ancient wisdom meets compassionate care
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <stat.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 1998 by Dr. Rajeev Menon, AyurVeda Centre began with a simple vision: to make authentic
                  Ayurvedic healing accessible to everyone seeking natural, holistic healthcare solutions.
                </p>
                <p>
                  What started as a small clinic with just two practitioners has grown into one of Kerala&apos;s most
                  trusted centres for Panchakarma therapies and traditional Ayurvedic treatments. Our success is
                  built on a foundation of genuine care, clinical expertise, and unwavering commitment to traditional practices.
                </p>
                <p>
                  Today, we serve patients from across India and around the world, offering personalized treatment
                  plans that address the root causes of disease rather than just symptoms. Our team combines deep
                  knowledge of classical Ayurvedic texts with modern diagnostic capabilities.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=800)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our certified practitioners bring decades of combined experience in Ayurveda and holistic healing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-primary font-semibold">{member.role}</p>
                      <p className="text-sm text-muted-foreground">{member.qualification}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Credentials & Recognition</h2>
            <p className="text-lg text-muted-foreground">
              Certified excellence in traditional Ayurvedic healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {credentials.map((credential) => (
              <Card key={credential} className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{credential}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Philosophy</h2>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              We believe that true healing comes from understanding and addressing the unique needs of each individual.
              By combining personalized care, time-tested Ayurvedic wisdom, and genuine compassion, we help our patients
              achieve lasting health and vitality. Your well-being is not just our profession—it&apos;s our calling.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
