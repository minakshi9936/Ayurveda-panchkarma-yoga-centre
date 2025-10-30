"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export default function AbhyangaPage() {
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
              "url('https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-green-900/80"></div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center p-6"
        >
          <motion.div variants={fadeUp}>
            <Badge className="bg-white/20 text-white border-white/20">
              Ayurvedic Therapy
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold mt-4"
          >
            Abhyanga
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="max-w-2xl mx-auto mt-6 text-xl text-green-100"
          >
            Full-body warm oil massage to nourish tissues, detoxify, and balance
            doshas.
          </motion.p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            About Abhyanga
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Abhyanga is a deeply relaxing Ayurvedic therapy using warm herbal
            oils. It promotes circulation, reduces stress, relieves muscular
            tension and enhances skin health.
          </p>

          <div className="mt-10">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-green-600 text-white rounded-full px-8 py-6 shadow-xl"
              asChild
            >
              <Link href="/contact">
                Book Session <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
