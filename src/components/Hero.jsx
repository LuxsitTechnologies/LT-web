import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";


function FloatingPaths({ position }) {
  
  const [animatingSide, setAnimatingSide] = useState("both"); 
  
  const colors = ["#545454", "#177399", "#737373"];
  
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    color: colors[i % 3]
  }));
  
  const reversePaths = Array.from({ length: 36 }, (_, i) => ({
    id: i + 100, 
    d: `M${780 + i * 5 * position} -${189 + i * 6}C${
      780 + i * 5 * position
    } -${189 + i * 6} ${712 + i * 5 * position} ${216 - i * 6} ${
      452 + i * 5 * position
    } ${343 - i * 6}C-${16 + i * 5 * position} ${470 - i * 6} -${
      84 + i * 5 * position
    } ${875 - i * 6} -${84 + i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    color: colors[i % 3]
  }));
  
  const animationDuration = 10; 
  
  
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setAnimatingSide("left");
      
      const intervalTimer = setInterval(() => {
        setAnimatingSide(prev => prev === "left" ? "right" : "left");
      }, animationDuration * 1000);
      
      return () => clearInterval(intervalTimer);
    }, animationDuration * 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.1 + (path.id % 36) * 0.03}
            initial={{ pathLength: 0 }}
            animate={{ 
              
              pathLength: animatingSide === "right" ? 0 : 1 
            }}
            transition={{
              duration: animationDuration,
              ease: "linear",
              delay: 0, 
            }}
          />
        ))}
        
        {reversePaths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.1 + ((path.id-100) % 36) * 0.03}
            initial={{ pathLength: 0 }}
            animate={{ 
            
              pathLength: animatingSide === "left" ? 0 : 1
            }}
            transition={{
              duration: animationDuration,
              ease: "linear",
              delay: 0, 
            }}
          />
        ))}
      </svg>
    </div>
  );
}

FloatingPaths.propTypes = {
  position: PropTypes.number.isRequired,
};


const textVariants = {
  hidden: (i) => ({ 
    opacity: 0, 
    x: i % 2 === 0 ? -100 : 100, 
    y: 20 
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.1, 
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  }),
};


const buttonVariants = {
  hover: {
    scale: 1.07,
    boxShadow: "0px 0px 15px rgba(23, 115, 153, 0.8)", 
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};


function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      className="relative min-h-screen w-full flex items-start justify-center pt-40 overflow-hidden bg-black text-white"
      initial="visible"
      animate="visible"
    >
      
      <div className="absolute inset-0 pointer-events-none transform -translate-y-60 md:-translate-y-32">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            variants={textVariants}
            custom={0}
          >
            LUXSIT TECHNOLOGIES
          </motion.h1>

          
          <motion.p
            className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-gray-200 mb-4"
            variants={textVariants}
            custom={1}
          >
            EMPOWERED BY INNOVATION
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl font-medium uppercase tracking-wide text-gray-200"
            variants={textVariants}
            custom={1}
          >
            REVOLUTIONIZING BUSINESS WITH NEXT-GEN TECH
          </motion.p>
         
          <motion.div
            className="mt-12 flex items-center justify-center"
            variants={textVariants}
            custom={2}
          >
           
           
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;