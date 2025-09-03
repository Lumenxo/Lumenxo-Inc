import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/AboutUs' },
    { name: 'Services', to: '/Services' },
    { name: 'Contact Us', to: '/ContactUs' },
    { name: 'Blog', to: '/Pricing' },
    { name: 'Careers', to: '/Careers' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
  
      <div className="bg-gradient-to-r from-[#151516] to-[#3783b5] text-white text-sm px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1">
            <FaPhone className="text-blue-300" />
            <span>7656918304</span>
          </div>
          <div className="flex items-center gap-1 border-l border-white pl-4">
            <FaEnvelope className="text-blue-300" />
            <span>info.lumenxo@gmail.com</span>
          </div>
          <div className="flex items-center gap-1 border-l border-white pl-4">
            <FaMapMarkerAlt className="text-blue-300" />
            <span>Balasore, Odisha, India</span>
          </div>
        </div>

        <div className="flex gap-2 mt-2 md:mt-0">
          <a href="https://www.facebook.com/people/LumenXo-Inc/61573160147922/" className="bg-white text-blue-900 rounded-full p-2 hover:scale-110 transition">
            <FaFacebookF />
          </a>
          <a href="https://x.com/Lumenxoinc" className="bg-white text-blue-900 rounded-full p-2 hover:scale-110 transition">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/@Lumenxo" className="bg-white text-blue-900 rounded-full p-2 hover:scale-110 transition">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/company/lumenxo/" className="bg-white text-blue-900 rounded-full p-2 hover:scale-110 transition">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/lumenxo__/" className="bg-white text-blue-900 rounded-full p-2 hover:scale-110 transition">
            <FaInstagram />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setVisible(false)}
          />
        )}
      </AnimatePresence>

  
      <motion.nav className="w-full z-50 bg-white border-b shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            <motion.div
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <img
                src="https://bing.com/th/id/OIP.3pHyhWedLbR9iGYTQq76EgAAAA?o=7&cb=thvnextc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="LumenXo Logo"
                className="h-10 w-10 lg:h-12 lg:w-12 object-cover rounded-full border border-gray-300 shadow"
              />
              <div className="ml-3">
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  LumenXo
                </span>
                <p className="text-xs font-medium text-gray-600">Software Pvt. Ltd.</p>
              </div>
            </motion.div>

         
            <div className="md:hidden z-50 relative">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisible(!visible)}
                className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-black z-50 relative"
              >
                <div className="w-6 h-6 relative">
                  <motion.span
                    animate={{ rotate: visible ? 45 : 0, y: visible ? 8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="block absolute h-0.5 w-6 bg-black rounded-full"
                  />
                  <motion.span
                    animate={{ opacity: visible ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="block absolute h-0.5 w-6 bg-black top-2 rounded-full"
                  />
                  <motion.span
                    animate={{ rotate: visible ? -45 : 0, y: visible ? -8 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="block absolute h-0.5 w-6 bg-black top-4 rounded-full"
                  />
                </div>
              </motion.button>
            </div>

   
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 ${
                      isActive(item.to)
                        ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                        : 'text-black hover:text-violet-600 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

    
          <AnimatePresence>
            {visible && (
              <motion.div
                className="md:hidden z-50 relative overflow-hidden bg-white rounded-2xl mt-4 mb-4 border border-gray-200 shadow"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      onClick={() => setVisible(false)}
                      className={`block px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                        isActive(item.to)
                          ? 'bg-black text-white'
                          : 'text-black hover:text-violet-600 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
