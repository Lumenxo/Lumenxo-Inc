import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import GridBackground from '../components/background/GridBackground';

const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-body relative overflow-x-hidden">
      <GridBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default RootLayout;