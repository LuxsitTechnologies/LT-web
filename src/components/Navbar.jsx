import { useState, useEffect, useRef } from "react";
import logo from "../assets/android-chrome-512x512.png";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

// Import the ContactFormModal component
const ContactFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Select a service",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "Select a service",
        message: "",
      });
      setSubmitted(false);
      onClose();
    }, 5000);
  };

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      },
    },
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <AnimatePresence>
        <motion.div 
          ref={modalRef}
          className="w-full max-w-lg bg-gray-900 p-6 rounded-lg border border-gray-800 relative"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 text-white hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <motion.h1 
            className="text-2xl md:text-3xl font-bold mb-2 text-center text-white"
            variants={itemVariants}
          >
            We're Just a Message Away
          </motion.h1>
          <motion.p 
            className="text-white mb-6 text-center text-sm"
            variants={itemVariants}
          >
            Tell us about your idea and we'll help bring it to life
          </motion.p>

          {submitted ? (
            <motion.div 
              className="text-center p-6 bg-white/10 rounded-lg border border-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Thanks for reaching out!</h3>
              <p className="text-white">We've received your message and will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-white/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-white/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block text-sm font-medium mb-1 text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-white/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="service" className="block text-sm font-medium mb-1 text-white">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-white/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                    <option disabled>Select a service</option>
                    <option value="Automations">Automations</option>
                    <option value="Web Apps">Web Apps</option>
                    <option value="Mobile Apps">Mobile Apps</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div className="md:col-span-2" variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-white">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-gray-800 border border-white/30 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </motion.div>

                <motion.div className="md:col-span-2" variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Talk
                  </motion.button>
                </motion.div>
              </div>
            </motion.form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

ContactFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Contact form modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
    <>
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

        {/* Hire Us Button - Now opens the modal */}
        <motion.button
          className="hidden md:block bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.1 }}
          onClick={openModal}
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

            {/* Mobile Hire Us Button - Now opens the modal */}
            <motion.button
              className="bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 w-full max-w-[200px]"
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setIsOpen(false); // Close the mobile menu
                openModal();     // Open the contact form
              }}
            >
              Hire Us
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Contact Form Modal */}
      <ContactFormModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Navbar;