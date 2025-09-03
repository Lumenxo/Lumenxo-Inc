import React from 'react';
import { FaRocket, FaWrench, FaBolt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FaRocket className="text-violet-600 text-3xl mb-3" />,
    title: 'Tailor-Made Software',
    description:
      'At LUMENXO, we craft powerful, tailor-made software built for real-world impact. Our solutions blend intuitive design, seamless scalability, and dedicated support.',
  },
  {
    icon: <FaWrench className="text-violet-600 text-3xl mb-3" />,
    title: 'Customizable Solutions',
    description:
      'Our flexible platforms evolve with your business. With intuitive interfaces and modular design, changes are simple, fast, and future-proof.',
  },
  {
    icon: <FaBolt className="text-violet-600 text-3xl mb-3" />,
    title: 'Lightning-Fast Support',
    description:
      'Count on our always-on team for swift, dependable assistance. We minimize downtime and maximize peace of mind.',
  },
];

export default function TechnologiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-violet-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">
        {/* Left: Images */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          {/* Main Image (visible on all sizes) */}
          <div className="rounded-xl overflow-hidden shadow-xl border border-violet-200">
            <img
              src="https://www.upkeepmarketing.com/wp-content/uploads/2023/02/Untitled-design-6-min-1024x922.png"
              alt="Team"
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* Overlapping Image (only on md and above) */}
          <div className="hidden md:block absolute bottom-[-40px] right-[-40px] w-[60%] max-w-[280px] rounded-xl overflow-hidden shadow-2xl border border-purple-200 bg-white z-20">
            <img
              src="https://technoshrine.com/TS/wp-content/uploads/2023/12/overview_img02.jpg"
              alt="Overview"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Plan your business strategy <br /> with <span className="text-violet-600">Our Experts</span>
          </h2>
          <p className="text-gray-600 text-md mb-10 leading-relaxed">
            Empowering businesses with innovative software, tailored insights, and reliable support — all designed to help you scale confidently in a competitive landscape.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>{feature.icon}</div>
                <div>
                  <h4 className="text-md font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
