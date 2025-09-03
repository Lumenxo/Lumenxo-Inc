import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const navItems = [
    
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/AboutUs' },
    { name: 'Services', to: '/Services' },
    { name: 'Contact Us', to: '/ContactUs' },
    { name: 'Blog', to: '/Pricing' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Backdrop when mobile menu is open */}
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

      <motion.nav
        // initial={{ y: -100, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.8, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-white text-black border-b shadow-md"
        style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo and Brand Name */}
            <motion.div 
              className="flex items-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative">
                <img
                  src="https://bing.com/th/id/OIP.3pHyhWedLbR9iGYTQq76EgAAAA?o=7&cb=thvnextc2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="LumenXo Logo"
                  className="relative h-10 w-10 lg:h-12 lg:w-12 object-cover rounded-full border border-gray-300 shadow"
                />
              </div>
              <div
               className="ml-3"
               to="/"
              >
                <span className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  LumenXo
                </span>
                <p className="text-xs font-medium text-gray-600">
                  Software Pvt. Ltd.
                </p>
              </div>
            </motion.div>

            {/* Mobile toggle button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisible(!visible)}
                className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-black"
                aria-label="Toggle navigation"
                aria-expanded={visible}
              >
                <div className="w-6 h-6 relative">
                  <motion.span
                    animate={{
                      rotate: visible ? 45 : 0,
                      y: visible ? 8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="block absolute h-0.5 w-6 bg-black rounded-full"
                  />
                  <motion.span
                    animate={{
                      opacity: visible ? 0 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="block absolute h-0.5 w-6 bg-black top-2 rounded-full"
                  />
                  <motion.span
                    animate={{
                      rotate: visible ? -45 : 0,
                      y: visible ? -8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="block absolute h-0.5 w-6 bg-black top-4 rounded-full"
                  />
                </div>
              </motion.button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    // initial={{ opacity: 0, y: -20 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      to={item.to}
                      className={`relative px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 group ${
                        isActive(item.to)
                          ? 'bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg'
                          : 'text-black hover:text-violet-600 hover:bg-gray-100'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {isActive(item.to) && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 rounded-xl"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {visible && (
              <motion.div
                // initial={{ height: 0, opacity: 0 }}
                // animate={{ height: 'auto', opacity: 1 }}
                // exit={{ height: 0, opacity: 0 }}
                // transition={{ duration: 0.4 }}
                className="md:hidden overflow-hidden bg-white rounded-2xl mt-4 mb-4 border border-gray-200 shadow"
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      // initial={{ opacity: 0, x: -20 }}
                      // animate={{ opacity: 1, x: 0 }}
                      // transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.to}
                        onClick={() => setVisible(false)}
                        className={`block px-4 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
                          isActive(item.to)
                            ? 'bg-black text-white'
                            : 'text-black hover:text-violet-600 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {isActive(item.to) && (
                            <motion.div
                              // initial={{ scale: 0 }}
                              // animate={{ scale: 1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Spacer to push content below fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Navbar;
