import React from 'react';
import { motion } from "framer-motion";
import { X } from "lucide-react";

const AutomationDetailModal = ({ isOpen, onClose }) => {
  const automationDetails = [
    {
      title: "Workflow Mapping",
      description: "Comprehensive analysis of your current business processes to identify optimization opportunities.",
      icon: "🗺️"
    },
    {
      title: "Custom Automation Strategy",
      description: "Tailored automation solutions designed to meet your unique business requirements and goals.",
      icon: "🤖"
    },
    {
      title: "Seamless Integration",
      description: "Smooth implementation and integration of automated solutions with your existing systems.",
      icon: "🔗"
    },
    {
      title: "Continuous Optimization",
      description: "Ongoing monitoring and refinement to ensure maximum efficiency and return on investment.",
      icon: "📈"
    }
  ];

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} 
    >
      <motion.div 
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Automation Services
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Transform your business with intelligent, scalable automation solutions that drive efficiency and productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {automationDetails.map((detail, index) => (
            <motion.div 
              key={index}
              className="bg-gray-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-3">
                {detail.title}
              </h3>
              <p className="text-gray-700">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AutomationDetailModal;
