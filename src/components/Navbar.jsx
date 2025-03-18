import { useState, useEffect } from "react";
import logo from "../assets/android-chrome-512x512.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Scroll Spy using IntersectionObserver
  useEffect(() => {
    const sectionIds = ["Home", "portfolio", "services", "testimonials"];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveLink(id);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Navigation link animation
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black/70 backdrop-blur-md text-white p-4 md:px-20 shadow-lg"
      initial="hidden"
      animate="visible"
    >
      {/* Logo */}
      <a href="#" className="text-xl font-bold hover:scale-105 transition-transform">
        <img src={logo} alt="Logo" className="h-14 brightness-0 invert" />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-grow justify-center space-x-8">
        {["Home", "portfolio", "services", "testimonials"].map((item) => (
          <motion.a
            key={item}
            href={`#${item}`}
            onClick={() => setActiveLink(item)}
            className={`relative transition-all duration-300 hover:text-gray-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-500 after:transition-all after:duration-300 hover:after:w-full ${
              activeLink === item ? "text-green-400 after:w-full" : ""
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </motion.a>
        ))}
      </div>

      {/* Hire Us Button */}
      <motion.button
        className="hidden md:block bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.1 }}
      >
        Hire Us
      </motion.button>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-800 focus:outline-none transition-colors"
      >
        <div className="w-6 h-6 relative">
          <div className={`absolute h-[2px] w-full bg-white rounded transition-all duration-300 ${isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`} />
          <div className={`absolute h-[2px] top-1/2 -translate-y-1/2 w-full bg-white rounded transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
          <div className={`absolute h-[2px] w-full bg-white rounded transition-all duration-300 ${isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`} />
        </div>
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        className={`fixed md:hidden top-16 left-0 right-0 bg-black/70 backdrop-blur-md overflow-hidden transition-all ease-in-out z-50 ${isOpen ? "h-screen opacity-100" : "h-0 opacity-0"}`}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      >
        <div className="flex flex-col items-center p-6 space-y-6">
          {["Home", "portfolio", "services", "testimonials"].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              onClick={() => {
                setIsOpen(false);
                setActiveLink(item);
              }}
              className={`text-lg transition-colors duration-300 ${activeLink === item ? "text-green-400" : "hover:text-gray-300"}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}

          <motion.button
            className="bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 w-full max-w-[200px]"
            whileHover={{ scale: 1.1 }}
          >
            Hire Us
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;