"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, Trophy, X } from "lucide-react";

export default function ReviewsRewardsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);

  const [rating, setRating] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

 const reviews = [
  {
    name: "Priya Sharma",
    feedback:
      "The Panchakarma therapy truly changed my life. My chronic pain vanished and I feel rejuvenated.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Rahul Verma",
    feedback:
      "Excellent Ayurvedic treatment and very knowledgeable doctors. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Sneha Patel",
    feedback:
      "Their yoga sessions and therapies brought balance to my mind & body. Best holistic centre.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/47.jpg",
  },
  {
    name: "Vivek Singh",
    feedback:
      "I had spine issues & therapy here cured my pain. Very supportive staff and peaceful environment.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Aditi Gupta",
    feedback:
      "Hair fall reduced drastically after Herbal hair pack. Very happy with treatment.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },

  // ✅ ADDITIONAL DUMMY REVIEWS
  {
    name: "Nisha Reddy",
    feedback:
      "The detox therapy was outstanding. I feel much lighter and full of energy.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Arjun Mehta",
    feedback:
      "Amazing hospitality and treatment. My digestion problems improved within weeks.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/73.jpg",
  },
  {
    name: "Komal Joshi",
    feedback:
      "I loved their herbal steam bath. A must-try for relaxation and wellness!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/18.jpg",
  },
  {
    name: "Sanjay Kumar",
    feedback:
      "The therapists are skilled and polite. Panchakarma process was smooth & effective.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Deepika Narayan",
    feedback:
      "I came for weight loss therapy and it's working wonderfully. Highly satisfied!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/20.jpg",
  },
  {
    name: "Harsh Vardhan",
    feedback:
      "Perfect blend of traditional Ayurveda & modern care. Yoga sessions were transformative.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Ritika Desai",
    feedback:
      "The Shirodhara therapy relaxed me completely and improved my sleep quality.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/66.jpg",
  },
  {
    name: "Manish Joshi",
    feedback:
      "Ayurvedic internal medicines supported my therapy beautifully. I feel healthier than ever.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Kavita Chauhan",
    feedback:
      "My skin issues have drastically reduced. The herbal cleansing treatment is gold!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Aman Sharma",
    feedback:
      "Yoga + Panchakarma gave me deep relaxation and strength. Good experience.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Pooja Bhatt",
    feedback:
      "Therapists are friendly and knowledgeable. The space is very calm & soothing.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/53.jpg",
  },
  {
    name: "Gaurav Malhotra",
    feedback:
      "I felt an amazing difference in energy levels after detox. Must visit!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    name: "Swati Mishra",
    feedback:
      "Excellent ambiance and personalized therapy plans. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/60.jpg",
  },
  {
    name: "Neeraj Jain",
    feedback:
      "Their pulse diagnosis impressed me. Ayurveda at its finest.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];


  const totalSlides = Math.ceil(reviews.length / 3);

  // Auto-scroll every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRating(0);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsModalOpen(false);
    setSuccess(true);

    setTimeout(() => setSuccess(false), 3000);
  };

  const displayedReviews = reviews.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Reviews & Rewards
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover real patient experiences & our recognitions in holistic health.
        </p>
      </motion.div>

      {/* ====== 3-CARD CAROUSEL ====== */}
      <div className="relative mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayedReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl"
            >
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                <Image
                  src={review.image}
                  alt={review.name}
                  width={80}
                  height={80}
                />
              </div>

              <h3 className="font-semibold text-lg text-green-800">
                {review.name}
              </h3>

              <p className="text-gray-600 italic mt-2 mb-3">
                “{review.feedback}”
              </p>

              {/* Stars */}
              <div className="flex justify-center text-yellow-500">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} fill="currentColor" className="w-5 h-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-green-700 text-white px-3 py-1 rounded-full"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-700 text-white px-3 py-1 rounded-full"
        >
          ›
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mb-16">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-green-700" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* ======= REWARDS ======= */}
      <section className="mb-20 bg-green-50 rounded-2xl py-12 px-6 shadow-inner">
        <h2 className="text-3xl font-semibold text-green-700 text-center mb-10">
          Awards & Recognition
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Best Ayurvedic Center 2023",
              desc: "Awarded for excellence in Panchakarma & holistic treatments.",
              icon: Trophy,
            },
            {
              title: "Top Wellness & Yoga Institute",
              desc: "Recognized for holistic healing & natural therapies.",
              icon: Award,
            },
            {
              title: "Trusted Ayurveda Brand",
              desc: "Serving since 25+ years in natural healing.",
              icon: Award,
            },
          ].map((reward, index) => {
            const Icon = reward.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-6 rounded-xl text-center shadow-md"
              >
                <Icon className="mx-auto text-green-700 w-12 h-12 mb-4" />
                <h3 className="font-semibold text-xl text-green-800 mb-2">
                  {reward.title}
                </h3>
                <p className="text-gray-600">{reward.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-12">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Share Your Healing Story
        </h2>

        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg shadow-md text-lg"
        >
          Submit Your Review
        </button>
      </div>

      {/* ✅ Success POPUP */}
      {success && (
        <div className="fixed bottom-8 right-8 bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg">
          ✅ Thank you! Review submitted.
        </div>
      )}

      {/* ✅ MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-xl relative">
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-gray-600 hover:text-black"
            >
              <X />
            </button>

            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Submit Your Review
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full border p-3 rounded" placeholder="Full Name" required />
              <input className="w-full border p-3 rounded" placeholder="Email" required />
              <textarea
                className="w-full border p-3 rounded"
                placeholder="Write your feedback..."
                rows={4}
                required
              />

              {/* ⭐ Interactive Stars */}
              <div className="flex justify-center gap-2 my-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-7 h-7 cursor-pointer ${
                      rating > i ? "text-yellow-500" : "text-gray-400"
                    }`}
                    onClick={() => setRating(i + 1)}
                    fill={rating > i ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
