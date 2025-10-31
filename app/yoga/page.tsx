"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Calendar,
  Laptop,
  MapPin,
  Phone,
  Sparkles,
  X,
  CheckCircle,
} from "lucide-react";

export default function YogaPage() {
  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowForm(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* ✅ Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full relative h-[380px] md:h-[520px] rounded-xl overflow-hidden"
      >
        <img
          src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress"
          alt="Yoga Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4 text-center">
          <motion.h1
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold tracking-wide"
          >
            Yoga & Wellness
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-lg md:text-xl"
          >
            Join us to discover inner peace, strength, and flexibility through
            traditional and modern yoga practices.
          </motion.p>
        </div>
      </motion.section>

      {/* ✅ About Yoga */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl px-4 mt-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-green-700">
          Why Practice Yoga?
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
          Yoga is a holistic practice that connects the mind, body, and spirit.
          Whether you are looking to reduce stress, improve flexibility, or
          enhance spiritual growth, yoga offers the perfect pathway to a
          healthier lifestyle.
        </p>
      </motion.section>

      {/* ✅ Modes Section */}
      <section className="max-w-6xl px-4 mt-16 grid md:grid-cols-2 gap-10">
        {/* Online */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <Laptop className="text-green-600" size={32} />
            <h3 className="text-2xl font-semibold">Online Classes</h3>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Join live online yoga sessions from anywhere in the world.
          </p>

          <ul className="list-disc text-gray-700 ml-6 mt-4 space-y-1">
            <li>Live via Zoom / Google Meet</li>
            <li>Beginner → Advanced levels</li>
            <li>Morning / Evening batches</li>
          </ul>
        </motion.div>

        {/* Offline */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-6 border rounded-xl shadow-sm bg-white hover:shadow-md transition"
        >
          <div className="flex items-center gap-3">
            <MapPin className="text-green-600" size={32} />
            <h3 className="text-2xl font-semibold">Offline Studio Classes</h3>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Experience yoga in person with hands-on guidance.
          </p>

          <ul className="list-disc text-gray-700 ml-6 mt-4 space-y-1">
            <li>Certified instructors</li>
            <li>Personal attention</li>
            <li>Therapeutic yoga</li>
          </ul>
        </motion.div>
      </section>

      {/* ✅ Highlights */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl px-4 mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold text-green-700">
          Class Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[
            "Meditation & Breathing",
            "Flexibility Training",
            "Stress Relief",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border p-6 rounded-xl bg-white shadow-sm"
            >
              <Sparkles className="text-green-600 mx-auto" size={32} />
              <p className="mt-4 text-gray-700 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ CTA BUTTON */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="mt-16"
      >
        <button
          onClick={() => setShowForm(true)}
          className="px-10 py-4 bg-green-600 text-white rounded-xl text-xl hover:bg-green-700 transition-all shadow-md"
        >
          Join Classes
        </button>

        <br/>
        <br/>
      </motion.div>


      {/* ✅ Join Now Form (Modal) */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[200]"
          >
            <motion.form
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-xl p-8 w-[90%] md:w-[450px] shadow-xl relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute right-4 top-4"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-semibold mb-6 text-center">
                Join Yoga Classes
              </h2>

              {/* Inputs */}
              <div className="flex flex-col gap-4">
                <input
                  required
                  className="border p-3 rounded"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  required
                  className="border p-3 rounded"
                  placeholder="Email"
                />

                <input
                  required
                  className="border p-3 rounded"
                  placeholder="Phone Number"
                />

                {/* Mode */}
                <select required className="border p-3 rounded">
                  <option value="">Select Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>

                {/* Slot */}
                <select required className="border p-3 rounded">
                  <option value="">Select Slot Timing</option>
                  <option value="6AM–7AM">6AM–7AM</option>
                  <option value="7AM–8AM">7AM–8AM</option>
                  <option value="6PM–7PM">6PM–7PM</option>
                  <option value="7PM–8PM">7PM–8PM</option>
                </select>

                <textarea
                  className="border p-3 rounded"
                  placeholder="Message (Optional)"
                  rows={3}
                />

                <div className="flex items-center gap-3">
                  <input required type="checkbox" />
                  <p className="text-sm text-gray-600">
                    I agree to terms & conditions
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg text-lg hover:bg-green-700 transition"
              >
                Submit
              </button>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Success Popup */}
      <AnimatePresence>
        {success && (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border flex items-center gap-3"
          >
            <CheckCircle className="text-green-600" />
            <p>✅ Form submitted! We’ll reach out to you soon.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
