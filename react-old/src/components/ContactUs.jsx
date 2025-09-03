import React from 'react';
import { FaEnvelope, FaPhoneAlt,FaLink  , FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { BsWhatsapp } from 'react-icons/bs'; 

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

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
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

const socialVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const socialLinks = [
  {
    icon: <FaFacebookF />,
    name: 'Facebook',
    color: 'from-blue-600 to-blue-700',
    hoverColor: 'hover:from-blue-700 hover:to-blue-800',
    url: 'https://www.facebook.com/people/LumenXo-Inc/61573160147922/?rdid=Q108uaz8L7Wak14j&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19KfLtjtA2%2F'
  },
  // {
  //   icon: <FaTwitter />,
  //   name: 'Twitter',
  //   color: 'from-sky-500 to-sky-600',
  //   hoverColor: 'hover:from-sky-600 hover:to-sky-700',
  //   url: '#'
  // },
  {
    icon: <FaLink />,
    name: 'LinkTree',
    color: 'from-pink-500 to-rose-600',
    hoverColor: 'hover:from-pink-600 hover:to-rose-700',
    url: 'https://x.com/Lumenxoinc'
  },
  {
    icon: <FaLinkedinIn />,
    name: 'LinkedIn',
    color: 'from-blue-700 to-blue-800',
    hoverColor: 'hover:from-blue-800 hover:to-blue-900',
    url: 'https://tr.ee/FsF_Mbaqy9'
  },
  {
    icon: <BsWhatsapp />, 
     name: 'WhatsApp', 
    color: 'from-green-600 to-green-700',
    hoverColor: 'hover:from-green-700 hover:to-green-800',
    url: 'https://www.whatsapp.com/channel/0029VaxwsYuJUM2jam4hDZ12'
  },
];

export default function ContactInfo() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://tse2.mm.bing.net/th/id/OIP.ereU3u30vDuTpuSKAIRt4AAAAA?cb=thvnextc2&w=474&h=316&rs=1&pid=ImgDetMain&o=7&rm=3')`
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Curved Design Element */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1200,0 L1200,600 Q600,800 0,600 Z"
            fill="rgba(99, 102, 241, 0.1)"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're here to assist you! Reach out for inquiries, bookings, or support.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Email */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Email Us
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                inc.lumenxo@gmail.com
              </p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg">
                  <FaPhoneAlt className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Call Us
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                +918260569773
              </p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center h-full">
              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Visit Us
              </h4>
              
              <p className="text-gray-600 leading-relaxed">
                Balasore, Odisha, India
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Follow Us
          </motion.h3>

          <motion.div
            className="flex justify-center items-center gap-4 flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1,
                },
              },
            }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                variants={socialVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-4 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-white`}
                aria-label={`Follow us on ${social.name}`}
              >
                <div className="text-xl">
                  {social.icon}
                </div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {social.name}
                </div>
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/30 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ 
                    scale: [0.8, 1.2, 1],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}