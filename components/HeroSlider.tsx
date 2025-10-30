"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://images.pexels.com/photos/3865792/pexels-photo-3865792.jpeg?auto=compress&cs=tinysrgb&w=1920",
    heading: "Ayurveda for Wellness",
    description: "Discover the ancient wisdom of Ayurveda for complete body and mind wellness.",
    buttonText: "Learn More",
    buttonHref: "/about",
  },
  {
    image: "https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1920",
    heading: "Online Classes for Yoga",
    description: "Join our virtual yoga sessions from the comfort of your home.",
    buttonText: "Join Now",
    buttonHref: "/services#yoga",
  },
  {
    image: "https://images.pexels.com/photos/6629533/pexels-photo-6629533.jpeg?auto=compress&cs=tinysrgb&w=1920",
    heading: "Panchkarma Therapies",
    description: "Experience traditional detoxification and rejuvenation treatments.",
    buttonText: "Book Therapy",
    buttonHref: "/therapies",
  },
  {
    image: "https://res.cloudinary.com/dh9uxczld/image/upload/v1761826586/ChatGPT_Image_Oct_30_2025_05_45_14_PM_zzz5rx.png",
    heading: "Yoga for Healthy Life",
    description: "Embrace yoga practices for a balanced and healthy lifestyle.",
    buttonText: "Start Today",
    buttonHref: "/services#yoga",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => setCurrentIndex(index);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          />

          {/* ✅ Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />

          {/* ✅ If you want gradient overlay, keep this: */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" /> */}
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <motion.div
          key={`content-${currentIndex}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {slides[currentIndex].heading}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            {slides[currentIndex].description}
          </p>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg rounded-full">
            <Link href={slides[currentIndex].buttonHref}>
              {slides[currentIndex].buttonText}
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
