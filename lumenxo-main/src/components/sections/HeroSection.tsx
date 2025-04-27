import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useGlobalContext } from '../../context/GlobalContext';
import AnimatedCube from '../3d/AnimatedCube';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const { setCursorVariant } = useGlobalContext();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // GSAP Animation for background elements
      gsap.to('.gradient-orb', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        duration: 'random(2, 4)',
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: {
          amount: 1,
          from: 'random'
        }
      });
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section className="min-h-screen w-full relative flex items-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="gradient-orb absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-gradient-to-r from-purple-700/20 via-pink-500/10 to-blue-500/20 rounded-full filter blur-3xl" />
        <div className="gradient-orb absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-r from-yellow-500/20 via-amber-500/10 to-orange-500/20 rounded-full filter blur-3xl" />
        <div className="gradient-orb absolute top-[40%] right-[30%] w-[400px] h-[400px] bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      
      <div ref={ref} className="container mx-auto px-4 py-20 md:py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="text-center lg:text-left">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                Transform
              </span>
              <span className="block neon-text">Your Vision</span>
              <span className="block gradient-text">Into Reality</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We craft cutting-edge digital solutions that elevate your business 
              to new heights of innovation and success.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            >
              <button
                className="btn-primary group relative overflow-hidden px-8 py-4 text-lg"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
              
              <button
                className="glass-button relative overflow-hidden px-8 py-4 text-lg border-2 border-yellow-400/30 hover:border-yellow-400 text-yellow-400 rounded-full transform hover:scale-105 transition-all duration-300"
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                Get Started
                <div className="absolute inset-0 bg-yellow-400/10 transform scale-x-0 hover:scale-x-100 transition-transform origin-left duration-300" />
              </button>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="w-full aspect-square max-w-[600px] mx-auto relative">
              <AnimatedCube />
              <div className="absolute inset-0 bg-gradient-radial from-yellow-500/20 to-transparent blur-2xl animate-pulse" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-10 right-10 w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-xl animate-float" />
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-full filter blur-xl animate-float-slow" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;