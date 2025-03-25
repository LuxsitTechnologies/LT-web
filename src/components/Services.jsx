import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    title: "Automations",
    description:
      "We automate your workflows for highly profitable scale, custom and done-for-you.",
    iconName: "automation",
    color: "#00C2FF"
  },
  {
    title: "Web Apps",
    description:
      "We build modern, secure and scalable web applications to simplify business processes for you.",
    iconName: "webApp",
    color: "#00E0A4"
  },
  {
    title: "Mobile Apps",
    description:
      "Our fast, responsive and highly scalable mobile app development will help you get ahead in no time!",
    iconName: "mobileApp",
    color: "#4D7CF3"
  },
  {
    title: "AI Solutions",
    description:
      "We build and deploy custom AI solutions that CEOs and founders brag about.",
    iconName: "aiSolution",
    color: "#00E099"
  },
];

// Custom icons component remains unchanged
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
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
          <path d="M6 10h2v2H6zm0 4h2v2H6zm4-4h8v2h-8zm0 4h8v2h-8z"/>
        </svg>
      );
    case "mobileApp":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm1 17H7V4h10v14zm-5 2h2v1h-2z"/>
        </svg>
      );
    case "aiSolution":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm2-13h-4v2h4V7zm0 4h-4v2h4v-2zm0 4h-4v2h4v-2z"/>
        </svg>
      );
    default:
      return null;
  }
};

// Existing Automation Detail Modal
const AutomationDetailModal = ({ isOpen, onClose }) => {
  const automationDetails = [
    {
      title: "Workflow Mapping",
      description: "We analyze your current business processes and identify optimization opportunities.",
      icon: "🗺️"
    },
    {
      title: "Custom Automation Design",
      description: "Develop tailored automation strategies that align with your unique business needs.",
      icon: "🤖"
    },
    {
      title: "Implementation & Integration",
      description: "Seamlessly integrate automated solutions with your existing tools and systems.",
      icon: "🔗"
    },
    {
      title: "Continuous Optimization",
      description: "Ongoing monitoring and refinement to ensure maximum efficiency and ROI.",
      icon: "📈"
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
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Automation Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your business with intelligent, scalable automation solutions that drive efficiency, reduce operational costs, and unlock new levels of productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {automationDetails.map((detail, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold text-green-400 mb-3">
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

// Existing Web Apps Detail Modal
const WebAppsDetailModal = ({ isOpen, onClose }) => {
  const webAppDetails = [
    {
      title: "Custom Web Development",
      description: "Tailored web solutions that precisely match your unique business requirements.",
      icon: "🎨"
    },
    {
      title: "Modern Tech Stack",
      description: "Leveraging cutting-edge technologies for high-performance applications.",
      icon: "💻"
    },
    {
      title: "Scalable Architecture",
      description: "Robust, cloud-native designs that grow with your business needs.",
      icon: "📈"
    },
    {
      title: "Security & Performance",
      description: "Enterprise-grade security and optimized performance for smooth user experiences.",
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
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Web Application Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your digital presence with comprehensive web application development, crafting intuitive, powerful solutions that drive business growth and user engagement.
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
              <h3 className="text-xl font-semibold text-green-400 mb-3">
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

// New Mobile Apps Detail Modal
const MobileAppsDetailModal = ({ isOpen, onClose }) => {
  const mobileAppDetails = [
    {
      title: "Cross-Platform Development",
      description: "Seamless apps that work perfectly on iOS and Android, reducing development time and cost.",
      icon: "📱"
    },
    {
      title: "Native Performance",
      description: "Leveraging platform-specific capabilities for smooth, responsive user experiences.",
      icon: "⚡"
    },
    {
      title: "UI/UX Excellence",
      description: "Intuitive, beautiful designs that engage users and drive retention.",
      icon: "🎨"
    },
    {
      title: "Advanced Features",
      description: "Integrating cutting-edge technologies like AR, machine learning, and real-time sync.",
      icon: "🚀"
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
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Mobile Application Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your mobile strategy with innovative, high-performance mobile applications that captivate users and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mobileAppDetails.map((detail, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold text-green-400 mb-3">
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

// New AI Solutions Detail Modal
const AISolutionsDetailModal = ({ isOpen, onClose }) => {
  const aiSolutionDetails = [
    {
      title: "Custom AI Strategy",
      description: "Tailored AI solutions aligned with your unique business objectives and challenges.",
      icon: "🧠"
    },
    {
      title: "Machine Learning Models",
      description: "Advanced predictive and generative models that unlock insights and drive innovation.",
      icon: "📊"
    },
    {
      title: "AI Integration",
      description: "Seamless incorporation of AI capabilities into existing business processes and systems.",
      icon: "🔗"
    },
    {
      title: "Continuous Learning",
      description: "Self-improving AI systems that adapt and evolve with your business needs.",
      icon: "📈"
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
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            AI Solution Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Revolutionize your business with cutting-edge AI solutions that drive innovation, efficiency, and competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {aiSolutionDetails.map((detail, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-semibold text-green-400 mb-3">
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

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    switch(service.title) {
      case "Automations":
      case "Web Apps":
      case "Mobile Apps":
      case "AI Solutions":
        setSelectedService(service);
        break;
      default:
        console.log(`Service ${service.title} clicked`);
    }
  };

  const handleCloseModal = () => {
    setSelectedService(null);
  };

  // Animation variants remain unchanged
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
    <>
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
            className="text-xl text-gray-400 pt-4"
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-black border border-gray-800 rounded-lg p-6 overflow-hidden relative cursor-pointer transition-all duration-300"
              variants={itemVariants}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="absolute -right-10 -top-10 w-20 h-20 rounded-full opacity-20"
                style={{ background: service.color }}
                animate={{
                  scale: hoveredService === index ? [1, 1.2, 1] : 1,
                  transition: { duration: 1.5, repeat: hoveredService === index ? Infinity : 0 }
                }}
              />
              
              {/* Custom Icon Implementation */}
              <motion.div 
                className="mb-6 p-3 inline-block rounded-full"
                style={{ 
                  background: hoveredService === index ? service.color : "rgba(0, 194, 255, 0.1)",
                  boxShadow: hoveredService === index ? `0 0 15px ${service.color}` : "none",
                  color: "#ffffff"
                }}
                whileHover={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <CustomIcon name={service.iconName} />
              </motion.div>
              
              {/* Service Title - Now in green without ID number */}
              <h3 className="text-xl font-bold text-green-400 mb-4">
                {service.title}
              </h3>
              
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
                  width: hoveredService === index ? "100%" : "30%",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Conditional Modals */}
      {selectedService?.title === "Automations" && (
        <AutomationDetailModal 
          isOpen={true} 
          onClose={handleCloseModal} 
        />
      )}
      {selectedService?.title === "Web Apps" && (
        <WebAppsDetailModal 
          isOpen={true} 
          onClose={handleCloseModal} 
        />
      )}
      {selectedService?.title === "Mobile Apps" && (
        <MobileAppsDetailModal 
          isOpen={true} 
          onClose={handleCloseModal} 
        />
      )}
      {selectedService?.title === "AI Solutions" && (
        <AISolutionsDetailModal 
          isOpen={true} 
          onClose={handleCloseModal} 
        />
      )}
    </>
  );
};

export default Services;