"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";

export const therapyMenu = [
  { label: "Abhyanga", href: "/therapies/abhyanga" },
  { label: "Agnikarma", href: "/therapies/agnikarma" },
  { label: "Basti (Enema)", href: "/therapies/basti-enema" },
  { label: "Body Scrub Massage", href: "/therapies#body-scrub-massage" },
  { label: "Griva Vasthi", href: "/therapies#griva-vasthi" },
  { label: "Herbal Hair Pack", href: "/therapies#herbal-hair-pack" },
  { label: "Janu Vasthi", href: "/therapies#janu-vasthi" },
  { label: "Kati Vasti", href: "/therapies#kati-vasti" },
  { label: "Kerala Potli", href: "/therapies#kerala-potli" },
  { label: "Others", href: "/therapies#others" },
];

export default function TherapiesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* HERO */}
      <section className="relative h-[70vh] bg-cover bg-center flex justify-center items-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3757799/pexels-photo-3757799.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/80 to-green-900/80"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center p-6"
        >
          <motion.div variants={fadeUp}>
            <Badge className="bg-white/20 text-white border-white/20">
              Ayurvedic Therapies
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mt-4"
          >
            Authentic Healing
            <span className="block text-green-200">Therapies</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto mt-6 text-xl text-green-100"
          >
            Discover ancient treatments designed to detoxify, strengthen and
            rejuvenate body, mind & spirit.
          </motion.p>
        </motion.div>
      </section>

      {/* Therapy Cards */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {therapyMenu.map((item, index) => (
            <motion.div key={index} variants={fadeUp}>
              <Link href={item.href}>
                <Card className="cursor-pointer hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-green-800">{item.label}</CardTitle>
                    <CardDescription>
                      Explore therapeutic benefits and uses
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
