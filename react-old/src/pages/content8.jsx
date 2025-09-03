import React from "react";
import { motion } from "framer-motion";
import photo1 from "../Assets/photo1.jpg";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";
import photo4 from "../Assets/photo4.png";

const partners = [
  { name: "AIRGON", logo: photo1 },
  { name: "Tech Mentees", logo: photo2 },
  { name: "Kaffeinn", logo: photo3 },
    { name: "Grow Gyan", logo: photo4 },
];

export default function GrowingWithUs() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-3">
        Who is growing with Us
      </h2>
      <p className="mb-12 max-w-2xl mx-auto">
        Discover the thriving network of partners, clients, and entrepreneurs
        who are achieving remarkable growth and progress through their
        collaboration with us.
      </p>

      <div className="overflow-hidden flex gap-5 w-full h-40 relative">
        {partners.map((partner, index) => (
          <motion.img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="m-0 w-36 h-36 object-contain absolute top-4"
            initial={{ x: "100vw" }}
            animate={{ x: "-200px" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: index * 2,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </section>
  );
}
