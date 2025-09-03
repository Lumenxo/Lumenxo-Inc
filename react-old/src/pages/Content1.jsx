import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../Assets/download.svg';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Section */}
        <div>
          <motion.h1
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 mb-2"
          >
            Crafting Scalable, Secure & <br /> Intelligent Software Solutions
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="text-[#0056ff] font-semibold tracking-widest text-sm md:text-base mb-6"
          >
            Tenacity | Transformation | Triumph
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-600 text-lg mb-6"
          >
            We engineer high-performing, AI-powered, cloud-native products
            designed for rapid market launch, data-driven intelligence, and
            exceptional user experiences.
          </motion.p>

          <Link
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            onClick={() => window.location.href = '/ContactUs'}
            className="bg-[#0056ff] text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-[#0046d4] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Talk to Our Experts
            <span className="text-xl">&rarr;</span>
          </Link>
        </div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
        >
          <img
            src={heroImage}
            alt="Hero Illustration"
            className="w-full max-w-md md:max-w-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
