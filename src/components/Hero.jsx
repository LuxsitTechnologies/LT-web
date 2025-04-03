import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

function FloatingPaths({ position }) {
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
  }));


  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#10B981" // Green color
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], // Continuous flow animation
            }}
            transition={{
              duration: 10, // Slightly faster for more fluid motion
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear", // Linear easing for constant speed
              // Very minimal staggering to create wave-like effect without delays
              delay: (path.id % 4) * 0.15, 
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

// Contact Form Component
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
            className="absolute top-3 right-3 text-gray-400 hover:text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <motion.h1 
            className="text-2xl md:text-3xl font-bold mb-2 text-center"
            variants={itemVariants}
          >
            We're Just a Message Away
          </motion.h1>
          <motion.p 
            className="text-gray-400 mb-6 text-center text-sm"
            variants={itemVariants}
          >
            Tell us about your idea and we'll help bring it to life
          </motion.p>

          {submitted ? (
            <motion.div 
              className="text-center p-6 bg-green-900/20 rounded-lg border border-green-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-green-500 mb-2">Thanks for reaching out!</h3>
              <p>We've received your message and will get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="service" className="block text-sm font-medium mb-1">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
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
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
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

// Variants
const textVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15, // Slight delay for better stagger
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.07,
    boxShadow: "0px 0px 12px rgba(34, 197, 94, 0.8)", // Changed to green glow
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      className="relative min-h-screen w-full flex items-start justify-center pt-40 overflow-hidden bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated SVG Background */}
      <div className="absolute inset-0 pointer-events-none transform -translate-y-60 md:-translate-y-32">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            variants={textVariants}
            custom={0}
          >
            We help startups build amazing products
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            variants={textVariants}
            custom={1}
          >
            {EMPOWERED BY INNOVATION}
          </motion.p>

          {/* Button Animation - Now opens modal instead of navigating */}
          <motion.div variants={textVariants} custom={2}>
            <motion.button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 inline-block"
              whileHover="hover"
              variants={buttonVariants}
            >
              Got A Project? Let's Talk!
            </motion.button>
          </motion.div>

          {/* Client Testimonials Animation */}
          <motion.div
            className="mt-12 flex items-center justify-center"
            variants={textVariants}
            custom={3}
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={`/dummy-client.jpg`}
                    alt={`Client ${i}`}
                    width="48"
                    height="48"
                    className="rounded-full border-2 border-white"
                  />
                </motion.div>
              ))}
            </div>
            <div className="ml-4 text-left">
              <motion.p
                className="font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                200+ successful clients.
              </motion.p>
              <motion.a
                href="#testimonials"
                className="text-green-500 hover:text-green-600 hover:underline inline-block font-semibold"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Read testimonials →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;