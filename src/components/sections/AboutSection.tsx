import React from 'react';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../../context/GlobalContext';
import { Lightbulb, Target, Handshake, Clock, Settings, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { setCursorVariant } = useGlobalContext();
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            Why Choose Us
            <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-full"></span>
          </h2>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg">
            Explore Hassle-Free Support Solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Core Features",
              description: "At LUMENXO, we craft powerful, tailor-made software built for real-world impact. Our solutions blend intuitive design, seamless scalability, enterprise-grade security, and dedicated support — all to drive your business forward.",
              icon: <Shield size={32} />,
              delay: 0,
              color: "from-blue-400 to-indigo-500"
            },
            {
              title: "Easily Customizable",
              description: "Our flexible software solutions are built with adaptability in mind—tailored to evolve with your business. With intuitive interfaces and modular design, making changes is simple, fast, and seamless.",
              icon: <Settings size={32} />,
              delay: 1,
              color: "from-purple-400 to-pink-500"
            },
            {
              title: "Lightning-Fast Support",
              description: "Count on our always-on support team for swift, dependable assistance. We resolve issues quickly to keep your operations running smoothly—minimizing downtime and maximizing peace of mind.",
              icon: <Clock size={32} />,
              delay: 2,
              color: "from-yellow-400 to-orange-500"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:shadow-2xl group transition-all duration-500 relative overflow-hidden"
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0"
                style={{ background: `linear-gradient(to bottom right, ${card.color.split(' ')[1]}, ${card.color.split(' ')[3]})` }}
              />
              <motion.div
                className={`bg-gradient-to-r ${card.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:-translate-y-1 transition-all duration-500`}
                whileHover="hover"
              >
                <motion.div variants={iconVariants}>
                  {card.icon}
                </motion.div>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-all duration-300">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed">{card.description}</p>
              <div className="h-1 w-12 bg-gradient-to-r from-transparent via-gray-700 to-transparent rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-yellow-400 mb-2 block">Why we stand out</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Innovative Solutions for Your Business</h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              With over a decade of experience in software development, we've helped hundreds of businesses
              across various industries achieve their digital transformation goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              {[
                { title: "Expert Team", desc: "Skilled professionals with diverse expertise", icon: <Lightbulb size={20} /> },
                { title: "Cutting-Edge Tech", desc: "Using latest technologies and frameworks", icon: <Target size={20} /> },
                { title: "Agile Approach", desc: "Flexible and adaptive development process", icon: <Settings size={20} /> },
                { title: "Client-Centric", desc: "Focused on your success and satisfaction", icon: <Handshake size={20} /> }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="flex group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * i }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className="text-yellow-400 mr-4 shrink-0 pt-1 bg-yellow-500/10 p-2 rounded-lg group-hover:bg-yellow-500/20 transition-all duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-bold mb-1 text-white group-hover:text-yellow-400 transition-colors duration-300">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-950 backdrop-blur-md border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
           <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative aspect-video overflow-hidden w-full rounded-t-2xl group-hover:scale-[1.01] transition-all duration-700">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://player.vimeo.com/video/1078970176?background=1&autoplay=1&loop=1&byline=0&title=0"
    title="LumenXo Video"
    frameBorder="0"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
            <div className="p-8">
              <h4 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">Our Story</h4>
              <p className="text-gray-300 leading-relaxed">
                Founded in 2024, LumenXo has grown from a small team of passionate developers to a full-service software development company with a global client base. Our commitment to excellence and innovation drives everything we do.
              </p>
              <motion.button 
                className="mt-6 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg text-gray-900 font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-yellow-500/20 transform hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>More Surprises will be revealed soon</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default AboutSection;