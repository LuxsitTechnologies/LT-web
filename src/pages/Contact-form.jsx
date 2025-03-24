import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Select a service",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle form submission to your backend
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after submission (or you could redirect)
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "Select a service",
        message: "",
      });
      setSubmitted(false);
    }, 5000);
  };

  // Animation variants
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

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Form Content */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8">
        <motion.div 
          className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg border border-gray-800"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-2 text-center"
            variants={itemVariants}
          >
            We’re Just a Message Away
          </motion.h1>
          <motion.p 
            className="text-gray-400 mb-8 text-center"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="John Doe"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your Company"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us about your project, goals, and timeline..."
                  ></textarea>
                </motion.div>

                <motion.div className="md:col-span-2" variants={itemVariants}>
                  <motion.button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let’s Talk
                  </motion.button>
                </motion.div>
              </div>
            </motion.form>
          )}
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Luxsit Technologies. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactForm;