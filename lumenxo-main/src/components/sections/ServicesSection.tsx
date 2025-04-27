import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Cloud, 
  Bot, 
  Shield, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { useGlobalContext } from '../../context/GlobalContext';

const services = [
  {
    icon: <Code size={32} />,
    title: "Custom Software Development",
    description: "Tailored software solutions designed specifically for your unique business requirements and challenges.",
    color: "from-blue-500 to-blue-400",
    bgLight: "bg-blue-900/30",
    highlight: "blue"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    color: "from-cyan-500 to-cyan-400",
    bgLight: "bg-cyan-900/30",
    highlight: "cyan"
  },
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    description: "Responsive, high-performance websites and web applications that engage users and drive conversions.",
    color: "from-indigo-500 to-indigo-400",
    bgLight: "bg-indigo-900/30",
    highlight: "indigo"
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to enhance flexibility, security, and performance.",
    color: "from-sky-500 to-sky-400",
    bgLight: "bg-sky-900/30",
    highlight: "sky"
  },
  {
    icon: <Bot size={32} />,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage AI and ML to automate processes and extract valuable insights from data.",
    color: "from-purple-500 to-purple-400",
    bgLight: "bg-purple-900/30",
    highlight: "purple"
  },
  {
    icon: <Shield size={32} />,
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.",
    color: "from-teal-500 to-teal-400",
    bgLight: "bg-teal-900/30",
    highlight: "teal"
  }
];

const ServicesSection = () => {
  const { setCursorVariant } = useGlobalContext();
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200
      }
    }
  };

  const descVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5
      }
    }
  };

  const highlightColors = {
    blue: "bg-blue-400/20 border-blue-400",
    cyan: "bg-cyan-400/20 border-cyan-400",
    indigo: "bg-indigo-400/20 border-indigo-400",
    sky: "bg-sky-400/20 border-sky-400",
    purple: "bg-purple-400/20 border-purple-400",
    teal: "bg-teal-400/20 border-teal-400"
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ 
            x: [0, 100, 50, 0], 
            y: [0, 50, 100, 0],
            scale: [1, 1.2, 1.1, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          style={{ top: '5%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ 
            x: [0, -70, -30, 0], 
            y: [0, 30, 70, 0],
            scale: [1, 1.3, 1, 1.1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2
          }}
          style={{ bottom: '10%', right: '15%' }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{ 
            x: [0, 60, 20, 0], 
            y: [0, -40, -80, 0],
            scale: [1, 1.1, 1.2, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 5
          }}
          style={{ top: '60%', left: '20%' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={titleVariants}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold relative inline-block text-white mb-3">
            Our Services
            <motion.span 
              className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            ></motion.span>
          </h2>
          <motion.p 
            className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg"
            variants={descVariants}
          >
            We offer comprehensive software development services designed to propel your business forward.
            Let us help you achieve your vision with cutting-edge technology solutions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative group rounded-2xl p-8 overflow-hidden backdrop-blur-lg transition-all duration-500 
                ${hoveredService === index ? `${highlightColors[service.highlight]} border-2` : 'bg-gray-800/40 border border-gray-700/50'}`}
              onMouseEnter={() => { 
                setCursorVariant('text'); 
                setHoveredService(index); 
              }}
              onMouseLeave={() => { 
                setCursorVariant('default'); 
                setHoveredService(null); 
              }}
              onClick={() => setActiveService(activeService === index ? null : index)}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            >
              {/* Background glow effect */}
              <motion.div 
                className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-40 z-0 transition-all duration-700 bg-gradient-to-r ${service.color}`}
                initial={{ scale: 0.6, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 0.4 }}
              />

              {/* Floating particles on hover */}
              {hoveredService === index && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`particle-${i}`}
                      className={`absolute w-2 h-2 rounded-full opacity-60 ${service.bgLight}`}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        x: Math.random() * 100 - 50,
                        y: Math.random() * -100,
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                      style={{ 
                        left: `${Math.random() * 80 + 10}%`, 
                        bottom: '20%' 
                      }}
                    />
                  ))}
                </>
              )}

              {/* Service Icon with pulse effect */}
              <motion.div 
                className={`relative z-10 w-20 h-20 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg`}
                whileHover={{ 
                  rotate: [0, -5, 5, -5, 0],
                  scale: 1.05,
                  transition: { duration: 0.5 }
                }}
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-75"
                  animate={{ 
                    boxShadow: ['0 0 0 0 rgba(255,255,255,0)', '0 0 0 10px rgba(255,255,255,0)'],
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <motion.h3 
                className="text-2xl font-bold mb-4 relative z-10 text-white"
              >
                {service.title}
              </motion.h3>

              {/* Service Description */}
              <motion.p className="text-gray-300 mb-6 relative z-10">
                {service.description}
              </motion.p>

              {/* Learn More Button */}
              <motion.div 
                className={`flex items-center font-medium relative z-10 text-blue-400`}
                initial={{ opacity: 0.6, x: 0 }}
                whileHover={{ opacity: 1, x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-1">Learn More</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight size={18} />
                </motion.span>
              </motion.div>

              {/* Expanded Content when Active */}
              {activeService === index && (
                <motion.div 
                  className="mt-4 pt-4 border-t border-gray-700 relative z-10"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-400 text-sm">
                    Our {service.title.toLowerCase()} process involves careful planning, expert execution, and continuous optimization to ensure your project succeeds.
                  </p>
                  <motion.button
                    className={`mt-4 px-5 py-2 rounded-lg text-white bg-gradient-to-r ${service.color} text-sm font-medium flex items-center`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                    <ArrowRight size={14} className="ml-2" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button with advanced animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.button
            className="relative inline-flex items-center justify-center group"
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {/* Button background with animated gradient */}
            <motion.div 
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-full blur-md opacity-80"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "linear" 
              }}
              style={{ 
                backgroundSize: "200% 200%",
              }}
            />
            
            {/* Button content */}
            <motion.span 
              className="relative bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-12 rounded-full shadow-lg flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>Explore All Services</span>
              <motion.span
                animate={{ 
                  x: [0, 5, 0],
                  opacity: [1, 0.8, 1]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatType: "loop"
                }}
                className="ml-2"
              >
                🚀
              </motion.span>
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;