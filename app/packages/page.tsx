"use client";

import Link from "next/link";
import { CheckCircle, Star, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PackagesPage() {
  const packages = [
    {
      name: "Basic Wellness",
      price: "₹4,999",
      duration: "7 Days",
      features: [
        "Doctor Consultation",
        "Abhyanga (Full Body Massage)",
        "Steam Therapy",
        "Diet & Lifestyle Guidance",
      ],
      highlight: false,
    },
    {
      name: "Rejuvenation Plan",
      price: "₹9,999",
      duration: "14 Days",
      features: [
        "Complete Panchakarma",
        "Shirodhara Therapy",
        "Abhyanga Massage",
        "Yoga & Meditation Sessions",
        "Diet Chart + Herbal Supplements",
      ],
      highlight: true,
    },
    {
      name: "Premium Healing",
      price: "₹18,999",
      duration: "21 Days",
      features: [
        "Personal Doctor Supervision",
        "Full Panchakarma",
        "Daily Abhyanga & Shirodhara",
        "Private Yoga Training",
        "Home-Use Herbal Kit",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ========= HERO ========= */}
      <section className="relative bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Our Healing Packages</h1>
        <p className="max-w-2xl mx-auto mt-4 text-white/90 text-lg">
          Choose from our curated health packages designed to rejuvenate your body, mind, and soul.
        </p>
      </section>

      {/* ========= CARDS ========= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl shadow-lg p-8 border hover:scale-[1.03] duration-300
              ${pkg.highlight ? "bg-green-600 text-white border-green-700" : "bg-white border-gray-200"}`}
            >
              {pkg.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="h-4 w-4" /> Popular Choice
                </div>
              )}

              <h2 className="text-3xl font-bold text-center">{pkg.name}</h2>
              <p className="text-center text-3xl mt-4 font-semibold">
                {pkg.price} <span className="text-base">/ {pkg.duration}</span>
              </p>

              <div className="mt-6 space-y-3">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <p className={`${pkg.highlight ? "text-white" : "text-gray-700"}`}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button
                  asChild
                  size="lg"
                  className={`w-full ${
                    pkg.highlight
                      ? "bg-white text-green-700 hover:bg-gray-100"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========= BOTTOM CTA ========= */}
      <section className="py-20 bg-green-700 text-white text-center px-6">
        <HeartHandshake className="w-14 h-14 mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold">
          Not Sure Which Plan Works Best?
        </h2>
        <p className="mt-4 text-white/90 max-w-xl mx-auto">
          Talk to our Ayurvedic specialists to find the best treatment plan curated just for you!
        </p>

        <Button
          asChild
          size="lg"
          className="bg-white text-green-700 hover:bg-gray-100 mt-6 px-10"
        >
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  );
}
