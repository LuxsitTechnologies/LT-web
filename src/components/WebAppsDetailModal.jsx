import React from 'react';
import { motion } from "framer-motion";
import { X } from "lucide-react";

const WebAppsDetailModal = ({ isOpen, onClose }) => {
  const webAppDetails = [
    {
      title: "Custom Web Application Design",
      description: "Tailored web solutions that precisely match your unique business requirements and workflow.",
      icon: "🎨"
    },
    {
      title: "Modern Tech Stack",
      description: "Leveraging cutting-edge technologies like React, Next.js, and TypeScript for high-performance applications.",
      icon: "💻"
    },
    {
      title: "Scalable Architecture",
      description: "Robust, cloud-native designs that can effortlessly grow with your business needs and user base.",
      icon: "📈"
    },
    {
      title: "Security & Performance",
      description: "Enterprise-grade security protocols and optimized performance to ensure smooth, safe user experiences.",
      icon: "🔒"
    }
  ];

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Web Application Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your digital presence with our comprehensive web application development, crafting intuitive, powerful solutions that drive business growth and user engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {webAppDetails.map((detail, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {detail.title}
              </h3>
              <p className="text-gray-300">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WebAppsDetailModal;