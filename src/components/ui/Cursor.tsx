import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGlobalContext } from '../../context/GlobalContext';

export const Cursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorVariant } = useGlobalContext();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: "#F8C12C",
      mixBlendMode: "difference" as "difference",
    },
    hidden: {
      opacity: 0,
      height: 0,
      width: 0,
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(248, 193, 44, 0.5)",
      mixBlendMode: "normal" as "normal",
    },
    text: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(248, 193, 44, 0.1)",
      mixBlendMode: "normal" as "normal",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block rounded-full"
      variants={variants}
      animate={cursorVariant}
      transition={{ 
        type: "spring", 
        damping: 20, 
        stiffness: 300, 
        mass: 0.5 
      }}
    />
  );
};