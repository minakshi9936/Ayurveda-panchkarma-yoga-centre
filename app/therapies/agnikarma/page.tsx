'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AgnikarmaPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="font-sans text-gray-800">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage:
            "url('https://ayurveda.icliniq.com/articles/upload/agnikarma.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold relative z-10"
        >
          Agnikarma – Ayurvedic Pain Relief Therapy
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-4 text-lg relative z-10 max-w-2xl"
        >
          A powerful para-surgical Ayurvedic treatment that provides immediate
          relief from chronic pain using heat application.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mt-8 relative z-10"
        >
          <Link
            href="/contact"
            className="px-6 py-3 bg-orange-600 hover:bg-orange-700 transition-colors text-white font-semibold rounded-full shadow-lg"
          >
            Book Appointment
          </Link>
        </motion.div>
      </section>

      {/* ===== OVERVIEW SECTION ===== */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-orange-700 mb-4">
            What is Agnikarma?
          </h2>
          <p className="leading-relaxed text-gray-700">
            Agnikarma is an ancient Ayurvedic pain-management therapy where
            controlled therapeutic heat is applied to the affected area using
            specialized instruments. This procedure is highly effective in
            treating musculoskeletal and joint-related pain, improving mobility,
            and reducing inflammation instantly without side effects.
          </p>
        </motion.div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-16 bg-orange-50 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-orange-700 mb-8"
          >
            Benefits of Agnikarma
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'Quick relief from joint & muscular pain',
              'Reduces stiffness and swelling',
              'Improves mobility & flexibility',
              'Stimulates natural healing',
              'No side effects & safe procedure',
              'Balances Vata & Kapha dosha',
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
              >
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CONDITIONS TREATED ===== */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-orange-700 mb-8"
          >
            Conditions Treated
          </motion.h2>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-gray-700"
          >
            {[
              'Sciatica',
              'Tennis Elbow',
              'Arthritis & Joint Pain',
              'Heel Pain (Calcaneal Spur)',
              'Back & Shoulder Pain',
              'Cervical Spondylosis',
              'Frozen Shoulder',
            ].map((issue, idx) => (
              <li
                key={idx}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg"
              >
                {issue}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ===== PROCEDURE SECTION ===== */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-orange-700 mb-6 text-center"
          >
            Procedure of Agnikarma
          </motion.h2>

          <motion.ol
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            className="list-decimal space-y-4 pl-6 text-gray-700"
          >
            <li>
              <strong>Consultation:</strong> Pain area is assessed before the
              procedure.
            </li>
            <li>
              <strong>Heat Application:</strong> Heated metal rods or
              instruments are gently applied.
            </li>
            <li>
              <strong>Therapeutic Intensity:</strong> Heat stimulates
              deep-tissue healing.
            </li>
            <li>
              <strong>Post-Therapy Care:</strong> Cooling herbal pastes may be
              applied to soothe the area.
            </li>
          </motion.ol>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 text-center bg-orange-700 text-white">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold mb-6"
        >
          Experience Immediate Pain Relief with Agnikarma
        </motion.h3>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-lg text-orange-100"
        >
          Get treated by experienced Ayurvedic doctors at our centre. Book your
          appointment today.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-orange-700 font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            Book Appointment
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
