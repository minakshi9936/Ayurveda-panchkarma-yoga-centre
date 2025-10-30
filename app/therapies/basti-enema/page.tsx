"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "@/components/SectionWrapper";
import { MapPin, Phone, Mail } from "lucide-react";

const BastiEnema = () => {
  return (
    <SectionWrapper>
      {/* Hero Section */}
      <motion.section
        className="relative w-full bg-green-200/20 rounded-2xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src="/images/basti.jpg"
          alt="Basti Enema"
          width={800}
          height={350}
          className="w-full h-[350px] object-cover rounded-2xl"
        />

        <motion.div
          className="absolute inset-0 bg-black/45 flex items-center justify-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">Basti (Enema)</h1>
        </motion.div>
      </motion.section>

      {/* Description */}
      <motion.section
        className="mt-10 space-y-6"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold">What is Basti (Enema)?</h2>

        <p className="text-gray-700 leading-relaxed text-lg">
          Basti therapy is an Ayurvedic Panchakarma procedure focused on detoxifying
          the colon and balancing Vata dosha through medicated herbal decoctions or
          oils introduced into the rectum. It helps remove toxins and alleviates
          several chronic disorders.
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          It is considered one of the most effective treatments for neuro-muscular
          issues, joint pain, constipation, and digestive problems.
        </p>

        <h2 className="text-2xl font-bold mt-6">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
          <li>Relieves constipation & bloating</li>
          <li>Detoxifies the colon</li>
          <li>Reduces chronic pain</li>
          <li>Improves digestion</li>
          <li>Promotes strength & immunity</li>
        </ul>

        {/* Booking */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <a
            href="/contact"
            className="px-8 py-4 bg-green-600 text-white rounded-xl text-xl hover:bg-green-700 transition-all"
          >
            Book Appointment
          </a>
        </motion.div>
      </motion.section>

      {/* Contact Card */}
      <motion.section
        className="mt-16 bg-green-50 rounded-2xl p-6 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>

        <div className="space-y-3 text-gray-700 text-lg">
          <p className="flex gap-3 items-center">
            <MapPin size={20} /> Sector 15 – Gurgaon
          </p>

          <p className="flex gap-3 items-center">
            <Phone size={20} /> +91 98765 43210
          </p>

          <p className="flex gap-3 items-center">
            <Mail size={20} /> contact@ayulife.co.in
          </p>
        </div>
      </motion.section>
    </SectionWrapper>
  );
};

export default BastiEnema;
