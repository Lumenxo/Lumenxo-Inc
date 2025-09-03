import React, { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Testimonial = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-indigo-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
        
          
          <h2 className="text-4xl md:text-5xl font-{poppins} bg-[#044ad5] bg-clip-text text-transparent mb-6">
            What Our Clients Say
          </h2>
        
          
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            Real testimonials from people who trusted us with their digital transformation journey
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            ref={sliderRef}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-indigo-300',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-indigo-600',
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={slideVariants}
                >
                  <SingleTestimonial {...testimonial} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2 z-10 pointer-events-none">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-indigo-600 hover:text-indigo-700 pointer-events-auto"
            >
              <FaChevronLeft className="text-lg group-hover:transform group-hover:-translate-x-0.5 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="group w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-indigo-600 hover:text-indigo-700 pointer-events-auto"
            >
              <FaChevronRight className="text-lg group-hover:transform group-hover:translate-x-0.5 transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleTestimonial = ({ image, name, position, details }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <motion.div
        className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm" />
        
        {/* Main Content */}
        <div className="relative p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Section */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <motion.div
                className="relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Profile Image */}
                <div className="relative w-32 h-32 mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
                  <img 
                    src={image} 
                    alt={name} 
                    className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                  />
                  
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Name and Position */}
                <div className="mt-4">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">{name}</h4>
                  <p className="text-sm text-indigo-600 font-medium">{position}</p>
                  
                  {/* Star Rating */}
                  <div className="flex justify-center lg:justify-start gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Quote Icon */}
              <motion.div
                className="inline-block mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <FaQuoteLeft className="text-3xl text-indigo-300" />
              </motion.div>
              
              {/* Testimonial Text */}
              <motion.p 
                className="text-gray-700 text-lg leading-relaxed mb-6 italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                "{details}"
              </motion.p>
              
              {/* Accent Line */}
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto lg:mx-0"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const testimonials = [
  {
    image:
      "https://img.freepik.com/premium-vector/businessman-avatar-illustration-cartoon-user-portrait-user-profile-icon_118339-5507.jpg",
    name: "Bikash Pradhan",
    position: "Founder & CEO, Winning Wavez",
    details:
      "What stood out was LUMENXO's attention to detail and commitment to quality. They treated our project like their own, and it shows in the results. The team's professionalism and technical expertise exceeded our expectations.",
  },
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/024/183/502/original/male-avatar-portrait-of-a-young-man-with-a-beard-illustration-of-male-character-in-modern-color-style-vector.jpg",
    name: "Dr. Narayan Mohanty",
    position: "Founder, AYURSUCCESS",
    details:
      "From the first meeting to final delivery, LUMENXO exceeded our expectations. Their custom software streamlined our workflow and boosted productivity across departments. The ongoing support has been exceptional.",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/male-avatar-portrait-young-man-beard-vector-illustration-male-character-modern-color-style-male-avatar-portrait-307687004.jpg",
    name: "Smruti Suman Badjena",
    position: "Founder, ThreatArena",
    details:
      "LUMENXO transformed our vision into a sleek, high-performing digital platform. Their team is fast, communicative, and incredibly skilled. We've seen noticeable growth since launch and couldn't be happier with the results.",
  },
  {
    image:
      "https://img.freepik.com/premium-vector/man-male-character-avatar-vector-portrait-businessman-type-clothes_491904-56.jpg?w=2000",
    name: "Jai Bharat Verma",
    position: "Managing Director, PrepPright Ed-Tech Pvt. Ltd",
    details:
      "LUMENXO's support team is incredibly responsive. Whenever we've had questions or issues, they've been there within minutes—true partners in every sense. Their dedication to client success is unmatched in the industry.",
  },
];

export default Testimonial;