"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Heart, Shield, Sparkles, Users, Clock, CheckCircle, ArrowRight, Zap, Apple } from "lucide-react";

export default function StomachProblemsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const benefits = [
    {
      icon: Activity,
      title: "Improved Digestion",
      description: "Strengthens digestive fire (Agni) for better nutrient absorption and metabolism",
    },
    {
      icon: Heart,
      title: "Acid Balance",
      description: "Reduces acidity, heartburn, and GERD symptoms naturally",
    },
    {
      icon: Shield,
      title: "Gut Health",
      description: "Restores healthy gut flora and eliminates harmful toxins",
    },
    {
      icon: Sparkles,
      title: "IBS Relief",
      description: "Alleviates irritable bowel syndrome symptoms and regulates bowel movements",
    },
    {
      icon: Apple,
      title: "Bloating Control",
      description: "Reduces gas, bloating, and abdominal discomfort",
    },
    {
      icon: Clock,
      title: "Long-term Wellness",
      description: "Sustainable digestive health and prevention of chronic conditions",
    },
  ];

  const treatments = [
    {
      name: "Panchakarma Detox",
      description: "Comprehensive detoxification to remove accumulated toxins and restore digestive balance",
      duration: "7-21 days",
      benefits: ["Deep cleansing", "Balances doshas", "Improves digestion"],
    },
    {
      name: "Abhyanga (Oil Massage)",
      description: "Therapeutic oil massage to stimulate digestion and reduce abdominal discomfort",
      duration: "45-60 minutes",
      benefits: ["Stimulates digestion", "Reduces stress", "Improves circulation"],
    },
    {
      name: "Herbal Medicine",
      description: "Customized herbal formulations for digestive wellness and acid control",
      duration: "Ongoing",
      benefits: ["Natural healing", "No side effects", "Strengthens immunity"],
    },
    {
      name: "Dietary Therapy",
      description: "Personalized Ayurvedic diet plans to support digestive health",
      duration: "Ongoing",
      benefits: ["Nutrient absorption", "Weight management", "Energy boost"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* HERO */}
      <section className="relative h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/6214472/pexels-photo-6214472.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 via-green-800/80 to-green-900/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-4">
              Ayurvedic Treatment
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Digestive Health
            <span className="block text-green-200">Natural Solutions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed max-w-3xl"
          >
            Experience natural healing for acidity, IBS, constipation, and digestive disorders
            through traditional Ayurvedic therapies that restore gut balance and promote wellness.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact" className="flex items-center gap-2">
                Book Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-green-700 hover:bg-white hover:text-green-700 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/packages">View Packages</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold text-green-700 mb-6"
            >
              Understanding Digestive Health
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-700 leading-relaxed mb-6"
            >
              Digestive disorders often result from imbalanced Agni (digestive fire) and accumulation
              of toxins (ama). Conditions like acidity, IBS, constipation, and bloating stem from
              poor digestion, stress, and unhealthy dietary habits.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Ayurveda addresses these issues by strengthening digestive power, eliminating toxins,
              and restoring the natural balance of the digestive system through personalized therapies
              and lifestyle modifications.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative"
          >
            <div className="bg-gradient-to-br from-orange-100 to-green-200 p-8 rounded-3xl shadow-2xl">
              <div className="text-center">
                <Activity className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Digestive Wellness</h3>
                <p className="text-green-700">
                  Natural therapies for healthy digestion and gut balance
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-orange-50 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Treatment Benefits
            </Badge>
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Why Choose Ayurvedic Digestive Care?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience comprehensive relief from digestive disorders with natural therapies
              that strengthen your digestive system and improve overall gut health.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-green-800">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Our Treatments
            </Badge>
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Specialized Digestive Therapies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced Ayurvedic physicians combine traditional wisdom with modern understanding
              to provide effective relief from digestive conditions.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 gap-8"
          >
            {treatments.map((treatment, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/50">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-green-800 mb-2">{treatment.name}</CardTitle>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          {treatment.duration}
                        </Badge>
                      </div>
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 ml-4" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-base mb-4 leading-relaxed">
                      {treatment.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-700">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {treatment.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-orange-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
              Treatment Process
            </Badge>
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Your Path to Digestive Wellness
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures you receive comprehensive care at every step
              of your digestive healing journey.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                step: "01",
                title: "Digestive Assessment",
                description: "Comprehensive evaluation of digestive health, medical history, and dosha analysis to identify root causes.",
              },
              {
                step: "02",
                title: "Personalized Treatment Plan",
                description: "Customized therapy regimen combining detoxification, herbal medicines, and dietary recommendations.",
              },
              {
                step: "03",
                title: "Therapy Sessions",
                description: "Regular treatment sessions with specialized Ayurvedic procedures for digestive wellness.",
              },
              {
                step: "04",
                title: "Progress Monitoring",
                description: "Regular check-ups to monitor improvement and adjust treatments for optimal digestive health.",
              },
              {
                step: "05",
                title: "Dietary Guidance",
                description: "Nutritional recommendations and meal planning to support long-term digestive health.",
              },
              {
                step: "06",
                title: "Lifestyle Support",
                description: "Ongoing support with yoga practices and daily routines to maintain digestive balance.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <CardTitle className="text-xl text-green-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600 text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-700 via-orange-800 to-green-900 text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="relative z-10 max-w-4xl mx-auto px-6"
        >
          <motion.div variants={fadeUp} className="mb-8">
            <Activity className="w-20 h-20 text-orange-200 mx-auto mb-6" />
          </motion.div>

          <motion.h3
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Restore Your Digestive Health
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl mb-8 text-green-100 leading-relaxed max-w-3xl mx-auto"
          >
            Don't let digestive issues control your life. Experience the transformative power of
            Ayurvedic healing and rediscover the joy of healthy, comfortable digestion.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold">
              <Link href="/contact" className="flex items-center gap-2">
                Book Your Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-white text-green-700 hover:bg-white hover:text-green-700 text-lg px-10 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold">
              <Link href="/packages">Explore Treatment Packages</Link>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 text-green-200">
            <p className="text-lg">✓ Free initial consultation • ✓ Personalized digestive care • ✓ Experienced Ayurvedic specialists&apos;</p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
