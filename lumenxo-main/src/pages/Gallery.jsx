// GallerySlider.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Img1 from "../Assets/c1.jpg";
import Img2 from "../Assets/c2.jpg";

const galleryItems = [
  {
    img: Img2,
    title: "Cyber Awareness Programme (Part 1)",
    description: `Rayagada, Gunupur 15/8 (Sunday):
On the auspicious occasion of Independence Day, a Cyber Awareness Programme was organized in an enthusiastic atmosphere at Gandhi Public School, Gunupur.

The main objective of this event was to create awareness about the increasing threats in the cyber world, cyber crimes, and online frauds, as well as to provide practical knowledge on how to stay safe in the digital space.

As special guests, Mr. Bibhash Ranjan Panda (Founder, LumenXo Software Pvt. Ltd.) and Mr. Kalyan Kumar Das (Co-Founder) attended the programme. Company officials Ayush Kumar Biswal, Shraddha Suman Nayak, and Ch. Arman were also present and played an active role in making the event successful.

Cybersecurity expert Mr. Shakti Prasad Sahu delivered a detailed talk on cyber safety. He discussed issues such as online fraud, phishing attacks, fake websites, OTP scams, password security, privacy protection on social media, and measures to prevent data theft. He emphasized, “In today’s digital age, cybersecurity is not just an option but a necessity for everyone.”`,
  },
  {
    img: Img1,
    title: "Cyber Awareness Programme (Part 2)",
    description: `The session was presided over by Founder Bibhash Ranjan Panda, who in his address said:
“LumenXo Software Pvt. Ltd. is always committed to organizing awareness programmes for society. If we begin awareness from schools, the upcoming generation will grow as responsible and safe digital citizens.”

As the keynote speaker, Co-Founder Kalyan Kumar Das shared his insights and experiences about cyber threats and security in the digital world.

At the conclusion, the Principal of Gandhi Public School expressed heartfelt gratitude to LumenXo Software Pvt. Ltd., appreciating their excellent and timely initiative. He stated, “In today’s times, education along with knowledge of cyber safety is equally important. This programme has been extremely informative for our teachers, students, and staff. We will always welcome such initiatives in the future.”

With active participation from everyone, encouragement from the school family, and the dedicated efforts of LumenXo Software Pvt. Ltd., the programme concluded successfully.`,
  },
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/03/07/56/71/360_F_307567102_lcPJUW10EdNeMKBTyUFg41QDWSFg6f0h.jpg')",
      }}
    >
      <section className=" rounded-2xl shadow-lg p-8 md:p-12 max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-center text-zinc-600 mb-12"> <span className="text-5xl font-bold text-blue-500 text-center mb-12" >G</span>allery</h2>

        <div className="relative flex flex-col md:flex-row items-center gap-8">
         
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
          >
            <ChevronLeft size={28} />
          </button>

       
          <div className="w-full md:w-1/2 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={galleryItems[currentIndex].img}
                src={galleryItems[currentIndex].img}
                alt={galleryItems[currentIndex].title}
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          <div className="w-full md:w-1/2 max-h-80 overflow-y-auto pr-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={galleryItems[currentIndex].title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {galleryItems[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white transition"
          >
            <ChevronRight size={28} />
          </button>
        </div>

 
        <div className="flex justify-center mt-6 space-x-2">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex
                  ? "bg-blue-500 scale-110"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GallerySlider;
