"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Activity,
  Heart,
  Shield,
  Sparkles,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function KeralaPotliPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const benefits = [
    {
      icon: Activity,
      title: "Pain Relief",
      description:
        "Reduces chronic muscle pain and discomfort",
    },
    {
      icon: Heart,
      title: "Better Circulation",
      description: "Improves blood flow and lymphatic drainage",
    },
    {
      icon: Shield,
      title: "Enhanced Flexibility",
      description: "Increases joint mobility and muscle flexibility",
    },
    {
      icon: Sparkles,
      title: "Relaxation",
      description: "Deep relaxation for body and mind",
    },
    {
      icon: Users,
      title: "Detoxification",
      description: "Helps remove toxins from tissues",
    },
    {
      icon: Clock,
      title: "Stress Reduction",
      description: "Reduces stress and promotes well-being",
    },
  ];

  const treatments = [
    {
      name: "Kerala Potli Therapy",
      description:
        "Traditional Ayurvedic treatment using heated herbal pouches for deep tissue massage and therapeutic healing.",
      duration: "45-60 minutes",
      benefits: ["Reduces muscle pain", "Improves circulation", "Enhances flexibility"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* HERO */}
      <section className="relative h-[80vh] flex flex-col justify-center items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/80 to-green-900/90"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <motion.div variants={fadeUp}>
            <Badge className="bg-white/20 text-white border-white/30 mb-4">
              Ayurvedic Therapy
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Kerala Potli
            <span className="block text-green-200">Herbal Massage</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
          >
            Traditional Ayurvedic therapy using heated herbal pouches for deep tissue massage and therapeutic healing.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-green-700 hover:bg-green-50 rounded-full px-8 py-6 text-lg shadow-xl"
            >
              <Link href="/contact">Book Consultation</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-green-700 hover:bg-white rounded-full px-8 py-6 text-lg shadow-xl"
            >
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
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-bold text-green-700 mb-6">
              Understanding Kerala Potli
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Kerala Potli therapy is a unique Ayurvedic treatment where medicinal
              herbs are bundled in a cloth pouch (potli), heated, and massaged over
              the body. This traditional therapy helps relieve pain, muscle stiffness,
              and improves overall circulation through deep herbal penetration.
            </p>
            <p className="text-lg text-gray-700">
              The heated herbal pouches deliver therapeutic warmth and herbal
              properties directly to affected areas, promoting healing and relaxation.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="text-center py-10">
                <Activity className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Herbal Healing
                </h3>
                <p className="text-gray-600">
                  Traditional therapy for pain relief and wellness
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-emerald-50 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800">
            Benefits
          </Badge>
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            Why Kerala Potli?
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="bg-white/80 p-4 hover:shadow-xl border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full mx-auto flex items-center justify-center text-white">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-green-800">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

     
      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Ready To Experience Healing?
        </motion.h3>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50 px-10 py-6 rounded-full font-semibold"
          >
            <Link href="/contact">Book Consultation</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-green-700 hover:bg-white hover:text-green-700 px-10 py-6 rounded-full font-semibold"
          >
            <Link href="/packages">View Packages</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
