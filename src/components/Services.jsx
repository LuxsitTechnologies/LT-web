import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Automations",
    description:
      "We automate your workflows for highly profitable scale, custom and done-for-you.",
    // Replace this with your custom icon component or import
    iconName: "automation",
    color: "#00C2FF"
  },
  {
    id: "02",
    title: "Web Apps",
    description:
      "We build modern, secure and scalable web applications to simplify business processes for you.",
    iconName: "webApp",
    color: "#00E0A4"
  },
  {
    id: "03",
    title: "Mobile Apps",
    description:
      "Our fast, responsive and highly scalable mobile app development will help you get ahead in no time!",
    iconName: "mobileApp",
    color: "#4D7CF3"
  },
  {
    id: "04",
    title: "AI Solutions",
    description:
      "We build and deploy custom AI solutions that CEOs and founders brag about.",
    iconName: "aiSolution",
    color: "#00E099"
  },
];

// Custom icons component
const CustomIcon = ({ name }) => {
  switch (name) {
    case "automation":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
          <path d="M17 8l-5 5-5-5h10z" />
        </svg>
      );
    case "webApp":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      );
    case "mobileApp":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14zm-5-2c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z" />
        </svg>
      );
    case "aiSolution":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return null;
  }
};

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleServiceClick = (serviceId) => {
    console.log(`Service ${serviceId} clicked`);
    // Add navigation or modal display logic here
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black py-20 px-6 md:px-10 lg:px-16 relative">
      {/* Simplified Background - just a single gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/20 pointer-events-none" />

      {/* Headings */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h3 
          className="text-3xl md:text-5xl font-bold text-white mb-3"
          variants={headingVariants}
        >
          Our Services
        </motion.h3>
        <motion.h2 
          className="text-xl text-white pt-4"
          variants={headingVariants}
        >
          AI-driven digital acceleration
        </motion.h2>
      </motion.div>

      {/* Responsive Grid: 1 column on mobile, 2 columns on small/medium, 4 on large */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-black border border-gray-800 rounded-lg p-6 overflow-hidden relative cursor-pointer transition-all duration-300"
            variants={itemVariants}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => handleServiceClick(service.id)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="absolute -right-10 -top-10 w-20 h-20 rounded-full opacity-20"
              style={{ background: service.color }}
              animate={{
                scale: hoveredService === service.id ? [1, 1.2, 1] : 1,
                transition: { duration: 1.5, repeat: hoveredService === service.id ? Infinity : 0 }
              }}
            />
            
            {/* Custom Icon Implementation */}
            <motion.div 
              className="mb-6 p-3 inline-block rounded-full"
              style={{ 
                background: hoveredService === service.id ? service.color : "rgba(0, 194, 255, 0.1)",
                boxShadow: hoveredService === service.id ? `0 0 15px ${service.color}` : "none",
                color: "#ffffff"
              }}
              whileHover={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <CustomIcon name={service.iconName} />
            </motion.div>
            
            <div className="flex items-center mb-4">
              <span className="text-cyan-400 font-mono text-sm mr-2">
                {service.id}
              </span>
              <h3 className="text-xl font-bold text-white">
                {service.title}
              </h3>
            </div>
            
            <p className="text-gray-400">
              {service.description}
            </p>
            
            <motion.div 
              className="h-0.5 mt-6 rounded-full"
              style={{ 
                background: `linear-gradient(to right, ${service.color}, rgba(0, 194, 255, 0.3))` 
              }}
              initial={{ width: 0 }}
              animate={{ 
                width: hoveredService === service.id ? "100%" : "30%",
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;