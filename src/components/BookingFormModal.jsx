import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

// BookingFormModal Component
const BookingFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    projectType: "Select a project type",
    preferredDate: "",
    preferredTime: "",
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
    console.log("Booking form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phoneNumber: "",
        projectType: "Select a project type",
        preferredDate: "",
        preferredTime: "",
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
          className="w-full max-w-md bg-gray-900 p-5 rounded-lg border border-gray-800 relative"
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
          
          {/* Modified heading with !text-white to force white color */}
          <motion.h1 
            className="text-xl md:text-2xl font-bold mb-2 text-center !text-white"
            style={{ color: "white !important" }}
            variants={itemVariants}
          >
            Book a Free Consultation
          </motion.h1>
          <motion.p 
            className="text-gray-400 mb-4 text-center text-xs"
            variants={itemVariants}
          >
            Schedule a call with one of our experts
          </motion.p>

          {submitted ? (
            <motion.div 
              className="text-center p-4 bg-green-900/20 rounded-lg border border-green-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-green-500 mb-2">Call Scheduled!</h3>
              <p className="text-sm">We've received your booking request and will confirm your appointment via email shortly.</p>
            </motion.div>
          ) : (
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
              className="space-y-3"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-xs font-medium mb-1 text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-xs font-medium mb-1 text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block text-xs font-medium mb-1 text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="phoneNumber" className="block text-xs font-medium mb-1 text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="+1 (123) 456-7890"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="projectType" className="block text-xs font-medium mb-1 text-white">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                    <option disabled>Select a project type</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile Application">Mobile Application</option>
                    <option value="Automation">Automation</option>
                    <option value="MVP Development">MVP Development</option>
                    <option value="Other">Other</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="preferredDate" className="block text-xs font-medium mb-1 text-white">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="preferredTime" className="block text-xs font-medium mb-1 text-white">
                    Preferred Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                  >
                    <option value="">Select a time</option>
                    <option value="Morning (9am-12pm)">Morning (9am-12pm)</option>
                    <option value="Afternoon (12pm-5pm)">Afternoon (12pm-5pm)</option>
                    <option value="Evening (5pm-8pm)">Evening (5pm-8pm)</option>
                  </select>
                </motion.div>

                <motion.div className="md:col-span-2" variants={itemVariants}>
                  <label htmlFor="message" className="block text-xs font-medium mb-1 text-white">
                    About your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-1.5 text-white focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    placeholder="Brief description of your project..."
                  ></textarea>
                </motion.div>

                <motion.div className="md:col-span-2" variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-1.5 px-4 rounded-full font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Call
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

BookingFormModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BookingFormModal;