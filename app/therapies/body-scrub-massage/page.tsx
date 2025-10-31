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

export default function BodyScrubMassagePage() {
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
      title: "Exfoliation",
      description:
        "Removes dead skin cells & improves texture",
    },
    {
      icon: Heart,
      title: "Skin Brightening",
      description: "Enhances complexion & radiance",
    },
    {
      icon: Shield,
      title: "Circulation Boost",
      description: "Stimulates blood flow throughout body",
    },
    {
      icon: Sparkles,
      title: "Detoxification",
      description: "Helps eliminate toxins from skin",
    },
    {
      icon: Users,
      title: "Stress Relief",
      description: "Reduces fatigue & promotes relaxation",
    },
    {
      icon: Clock,
      title: "Deep Nourishment",
      description: "Nourishes tissues & rejuvenates skin",
    },
  ];

  const treatments = [
    {
      name: "Body Scrub Massage",
      description:
        "Ayurvedic exfoliating therapy using natural scrubs and oils for complete skin rejuvenation.",
      duration: "45-60 minutes",
      benefits: ["Exfoliates skin", "Boosts circulation", "Promotes relaxation"],
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
              "url('https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
            Body Scrub
            <span className="block text-green-200">Massage</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto"
          >
            Rejuvenating exfoliation therapy that nourishes the skin and improves blood circulation.
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
              Understanding Body Scrub Massage
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Body Scrub Massage is an Ayurvedic exfoliating therapy that removes dead skin cells,
              enhances skin texture, stimulates circulation, and leaves the body deeply refreshed.
              Using natural herbal scrubs and warm oils, this treatment deeply nourishes and rejuvenates
              the skin from within.
            </p>
            <p className="text-lg text-gray-700">
              It is particularly beneficial for dull skin, poor circulation, stress-related fatigue,
              and those seeking natural skin brightening and detoxification.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="text-center py-10">
                <Activity className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  Skin Rejuvenation
                </h3>
                <p className="text-gray-600">
                  Natural exfoliation for glowing, healthy skin
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
            Why Body Scrub Massage?
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
