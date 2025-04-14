import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Floating SVG Animation with synchronized transitions
function FloatingPaths({ position }) {
  // State to control which side is currently animating
  const [animatingSide, setAnimatingSide] = useState("both"); // Start with both sides animating
  
  // Define the three colors from the request
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
    // Assign one of the three colors based on the index
    color: colors[i % 3]
  }));

  // Updated reverse paths to match the same pattern as the left paths
  const reversePaths = Array.from({ length: 36 }, (_, i) => ({
    id: i + 100, // Different ID to avoid conflicts
    d: `M${780 + i * 5 * position} -${189 + i * 6}C${
      780 + i * 5 * position
    } -${189 + i * 6} ${712 + i * 5 * position} ${216 - i * 6} ${
      452 + i * 5 * position
    } ${343 - i * 6}C-${16 + i * 5 * position} ${470 - i * 6} -${
      84 + i * 5 * position
    } ${875 - i * 6} -${84 + i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    // Use the same color pattern as the left side
    color: colors[i % 3]
  }));

  // Setting up animation timers
  const animationDuration = 10; // in seconds
  
  // Effect to toggle between left and right animations
  useEffect(() => {
    // Start with both sides animating, then switch to alternating after first animation
    const timer = setTimeout(() => {
      setAnimatingSide("left");
      
      // Then set up the interval for alternating
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
        
        {/* Left-to-right paths - start animating immediately */}
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
              delay: 0, // Remove delay for immediate start
            }}
          />
        ))}
        
        {/* Right-to-left paths - start animating immediately */}
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
              delay: 0, // Remove delay for immediate start
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

// Alternating Text Animations (Left & Right) - Reduced delay
const textVariants = {
  hidden: (i) => ({ 
    opacity: 0, 
    x: i % 2 === 0 ? -100 : 100, // Even => Left, Odd => Right
    y: 20 
  }),
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      delay: i * 0.1, // Reduced from 0.2 to 0.1 for faster animation
      duration: 0.5, // Reduced from 0.7 to 0.5 for faster animation
      type: "spring",
      stiffness: 100,
    },
  }),
};

// Button Hover Effect (Using the blue color from the scheme)
const buttonVariants = {
  hover: {
    scale: 1.07,
    boxShadow: "0px 0px 15px rgba(23, 115, 153, 0.8)", // Blue glow effect using #177399
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

// Hero Section Component
function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      className="relative min-h-screen w-full flex items-start justify-center pt-40 overflow-hidden bg-black text-white"
      initial="visible"
      animate="visible"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none transform -translate-y-60 md:-translate-y-32">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            variants={textVariants}
            custom={0}
          >
            LUXSIT TECHNOLOGIES
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-gray-200 mb-4"
            variants={textVariants}
            custom={1}
          >
            EMPOWERED BY INNOVATION
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl font-medium uppercase tracking-wide text-gray-400"
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