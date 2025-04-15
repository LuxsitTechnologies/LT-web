import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const services = [
  {
    title: "E-commerce",
    description:
      "We build custom e-commerce solutions that drive sales, enhance customer experience, and scale with your business.",
    iconName: "ecommerce",
    color: "#177399"
  },
  {
    title: "Web Applications",
    description:
      "We build modern, secure and scalable web applications to simplify business processes for you.",
    iconName: "webApp",
    color: "#177399"
  },
  {
    title: "Mobile Applications",
    description:
      "Our fast, responsive and highly scalable mobile app development will help you get ahead in no time!",
    iconName: "mobileApp",
    color: "#177399"
  },
  {
    title: "AI Solutions",
    description:
      "We build and deploy custom AI solutions that CEOs and founders brag about.",
    iconName: "aiSolution",
    color: "#177399"
  },
  {
    title: "ERP Solutions",
    description:
      "Streamline your business operations with our tailored ERP solutions designed for maximum efficiency and growth.",
    iconName: "erpSolution",
    color: "#177399"
  },
];

// Custom icons component updated with new icons
const CustomIcon = ({ name }) => {
  switch (name) {
    case "ecommerce":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
          <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
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
    case "erpSolution":
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
      );
    default:
      return null;
  }
};

// E-commerce Detail Modal with enhanced content
const EcommerceDetailModal = ({ isOpen, onClose }) => {
  const ecommerceDetails = [
    {
      title: "Custom E-commerce Platforms",
      description: "Our bespoke e-commerce solutions are meticulously crafted to align with your unique business model, target audience, and sales objectives. We integrate custom product catalogs, personalized shopping experiences, and specialized features that set your online store apart from competitors.",
      icon: "🛒",
      benefits: [
        "Unique brand experience that reinforces customer loyalty",
        "Customized purchase flows that maximize conversion rates",
        "Flexible architecture that accommodates unique product types and pricing models",
        "Seamless integration with existing business systems and processes"
      ]
    },
    {
      title: "Payment Integration",
      description: "We implement comprehensive payment ecosystems that balance security, convenience, and global accessibility. Our solutions support multiple currencies, diverse payment methods, and advanced fraud protection while maintaining a frictionless checkout experience.",
      icon: "💳",
      benefits: [
        "Reduced cart abandonment through streamlined checkout processes",
        "Expanded market reach through localized payment options",
        "Enhanced customer trust with robust security measures",
        "Automated reconciliation and simplified financial reporting"
      ]
    },
    {
      title: "Inventory Management",
      description: "Our intelligent inventory systems provide real-time visibility and control across multiple sales channels. Advanced features like automated reordering, predictive stock forecasting, and supplier management ensure optimal inventory levels and prevent costly stockouts or overstock situations.",
      icon: "📦",
      benefits: [
        "Reduced carrying costs through optimized inventory levels",
        "Minimized revenue loss from stockouts with predictive analytics",
        "Improved cash flow management through intelligent purchasing",
        "Enhanced customer satisfaction with accurate product availability"
      ]
    },
    {
      title: "Analytics & Optimization",
      description: "We deploy comprehensive analytics frameworks that track the entire customer journey, providing actionable insights to continuously enhance your e-commerce performance. Our optimization strategies are data-driven, focusing on increasing conversion rates, average order value, and customer lifetime value.",
      icon: "📊",
      benefits: [
        "Data-informed decision making that eliminates guesswork",
        "Personalized customer experiences that drive repeat purchases",
        "Optimized marketing spend through precise attribution modeling",
        "Continuous performance improvement through A/B testing frameworks"
      ]
    }
  ];

  const [selectedDetail, setSelectedDetail] = useState(ecommerceDetails[0]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
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
          <h2 className="text-3xl font-bold text-[#177399] mb-4">
            E-commerce Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your retail business with powerful e-commerce solutions that drive sales, enhance customer experiences, and scale with your growing business.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column with menu items */}
          <div className="md:w-1/3 flex flex-col gap-2 md:border-r border-gray-700 pr-4">
            {ecommerceDetails.map((detail, index) => (
              <motion.div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer ${selectedDetail.title === detail.title ? 'bg-gray-800 border-l-4 border-[#177399]' : 'bg-gray-900 hover:bg-gray-800'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedDetail(detail)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{detail.icon}</span>
                  <h3 className="font-semibold text-white">
                    {detail.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column with detail content */}
          <div className="md:w-2/3 p-4">
            <motion.div 
              key={selectedDetail.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-6">{selectedDetail.icon}</div>
              <h3 className="text-2xl font-semibold text-[#177399] mb-4">
                {selectedDetail.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedDetail.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  {selectedDetail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#177399] mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Web Applications Detail Modal with enhanced content
const WebAppsDetailModal = ({ isOpen, onClose }) => {
  const webAppDetails = [
    {
      title: "Custom Web Development",
      description: "We build tailored web applications that address specific business challenges and opportunities unique to your organization. Our solutions range from customer-facing portals to internal operational tools, all designed with a focus on usability, performance, and business impact.",
      icon: "🎨",
      benefits: [
        "Process automation that reduces operational costs and human error",
        "Custom workflows that match your exact business processes",
        "Competitive advantage through unique digital capabilities",
        "Improved stakeholder satisfaction through intuitive interfaces"
      ]
    },
    {
      title: "Modern Tech Stack",
      description: "Our development approach leverages cutting-edge technologies that provide the perfect balance of innovation, stability, and future-readiness. We carefully select frameworks, libraries, and architectural patterns that ensure optimal performance, maintainability, and scalability.",
      icon: "💻",
      benefits: [
        "Faster time-to-market with efficient development frameworks",
        "Superior user experience through modern frontend technologies",
        "Reduced technical debt through clean, maintainable code",
        "Lower long-term costs with sustainable technology choices"
      ]
    },
    {
      title: "Scalable Architecture",
      description: "We design and implement cloud-native architectures built for growth and resilience. Our solutions utilize microservices, containerization, and automated scaling to handle evolving workloads efficiently while maintaining consistent performance under varying demand.",
      icon: "📈",
      benefits: [
        "Elastic resource utilization that optimizes operational costs",
        "Business continuity with resilient, fault-tolerant systems",
        "Flexible deployment options across multiple cloud environments",
        "Future-proof infrastructure that grows with your business"
      ]
    },
    {
      title: "Security & Performance",
      description: "We integrate security and performance optimization throughout the development lifecycle. Our applications incorporate robust authentication, data protection, comprehensive testing, and continuous monitoring to ensure they remain secure, fast, and reliable in production.",
      icon: "🔒",
      benefits: [
        "Reduced risk of data breaches and associated costs",
        "Enhanced user retention through fast, responsive experiences",
        "Compliance with industry-specific security standards",
        "Proactive threat prevention through security-first architecture"
      ]
    }
  ];

  const [selectedDetail, setSelectedDetail] = useState(webAppDetails[0]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
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
          <h2 className="text-3xl font-bold text-[#177399] mb-4">
            Web Application Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your digital presence with comprehensive web application development, crafting intuitive, powerful solutions that drive business growth and user engagement.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column with menu items */}
          <div className="md:w-1/3 flex flex-col gap-2 md:border-r border-gray-700 pr-4">
            {webAppDetails.map((detail, index) => (
              <motion.div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer ${selectedDetail.title === detail.title ? 'bg-gray-800 border-l-4 border-[#177399]' : 'bg-gray-900 hover:bg-gray-800'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedDetail(detail)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{detail.icon}</span>
                  <h3 className="font-semibold text-white">
                    {detail.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column with detail content */}
          <div className="md:w-2/3 p-4">
            <motion.div 
              key={selectedDetail.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-6">{selectedDetail.icon}</div>
              <h3 className="text-2xl font-semibold text-[#177399] mb-4">
                {selectedDetail.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedDetail.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  {selectedDetail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#177399] mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Mobile Applications Detail Modal with enhanced content
const MobileAppsDetailModal = ({ isOpen, onClose }) => {
  const mobileAppDetails = [
    {
      title: "Cross-Platform Development",
      description: "Our cross-platform approach delivers consistent experiences across iOS and Android while maximizing development efficiency. We utilize advanced frameworks that maintain native-like performance while sharing codebase between platforms, accelerating time-to-market and ensuring feature parity.",
      icon: "📱",
      benefits: [
        "Accelerated development timeline with shared codebase",
        "Consistent brand experience across all mobile platforms",
        "Streamlined maintenance with unified update cycles",
        "Cost efficiency without compromising quality"
      ]
    },
    {
      title: "Native Performance",
      description: "We leverage platform-specific capabilities to create mobile applications that feel truly native to each operating system. Our approach ensures seamless access to device features, smooth animations, and responsive interfaces that users expect from premium mobile experiences.",
      icon: "⚡",
      benefits: [
        "Enhanced user satisfaction through fluid interactions",
        "Extended battery life with optimized resource usage",
        "Full utilization of platform-specific features",
        "Superior performance on even mid-range devices"
      ]
    },
    {
      title: "UI/UX Excellence",
      description: "Our design philosophy places user experience at the center of mobile application development. We create intuitive, visually appealing interfaces based on platform design guidelines while incorporating your unique brand identity to deliver memorable, delightful user journeys.",
      icon: "🎨",
      benefits: [
        "Reduced learning curve through intuitive navigation",
        "Increased user engagement through delightful interactions",
        "Higher retention rates with thoughtful UX patterns",
        "Strengthened brand perception through consistent design"
      ]
    },
    {
      title: "Advanced Features",
      description: "We implement cutting-edge mobile technologies that differentiate your application from competitors. From augmented reality and machine learning to offline capabilities and real-time synchronization, we integrate advanced features that create truly innovative mobile experiences.",
      icon: "🚀",
      benefits: [
        "Market differentiation through unique capabilities",
        "Enhanced user value with innovative functionality",
        "Future-ready applications that leverage emerging technologies",
        "Competitive advantage in saturated app marketplaces"
      ]
    }
  ];

  const [selectedDetail, setSelectedDetail] = useState(mobileAppDetails[0]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
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
          <h2 className="text-3xl font-bold text-[#177399] mb-4">
            Mobile Application Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your mobile strategy with innovative, high-performance mobile applications that captivate users and drive business growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column with menu items */}
          <div className="md:w-1/3 flex flex-col gap-2 md:border-r border-gray-700 pr-4">
            {mobileAppDetails.map((detail, index) => (
              <motion.div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer ${selectedDetail.title === detail.title ? 'bg-gray-800 border-l-4 border-[#177399]' : 'bg-gray-900 hover:bg-gray-800'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedDetail(detail)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{detail.icon}</span>
                  <h3 className="font-semibold text-white">
                    {detail.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column with detail content */}
          <div className="md:w-2/3 p-4">
            <motion.div 
              key={selectedDetail.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-6">{selectedDetail.icon}</div>
              <h3 className="text-2xl font-semibold text-[#177399] mb-4">
                {selectedDetail.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedDetail.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  {selectedDetail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#177399] mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// AI Solutions Detail Modal with enhanced content
const AISolutionsDetailModal = ({ isOpen, onClose }) => {
  const aiSolutionDetails = [
    {
      title: "Custom AI Strategy",
      description: "We develop comprehensive AI strategies aligned with your business objectives, data assets, and organizational readiness. Our approach identifies high-impact opportunities where artificial intelligence can drive measurable value, creating a roadmap for successful AI implementation and adoption.",
      icon: "🧠",
      benefits: [
        "Targeted investment in high-ROI AI initiatives",
        "Clear implementation roadmap with defined milestones",
        "Alignment between AI capabilities and business goals",
        "Realistic expectations with measurable success criteria"
      ]
    },
    {
      title: "Machine Learning Models",
      description: "Our data scientists build sophisticated machine learning models tailored to your specific business challenges. From predictive analytics and natural language processing to computer vision and recommendation systems, we develop and train models that convert raw data into valuable business insights.",
      icon: "📊",
      benefits: [
        "Predictive capabilities that anticipate customer needs",
        "Automated decision-making for operational efficiency",
        "Pattern recognition that uncovers hidden opportunities",
        "Competitive intelligence through advanced data analysis"
      ]
    },
    {
      title: "AI Integration",
      description: "We seamlessly incorporate AI capabilities into your existing business systems and workflows. Our integration approach ensures AI enhances rather than disrupts current processes, delivering intelligence exactly where and when it's needed to maximize business impact.",
      icon: "🔗",
      benefits: [
        "Minimal disruption to existing business processes",
        "Accelerated adoption through familiar interfaces",
        "Enhanced value from existing systems and data",
        "Contextual insights delivered at the point of decision"
      ]
    },
    {
      title: "Continuous Learning",
      description: "We implement self-improving AI systems that evolve alongside your business. Our models are designed to continuously learn from new data and feedback, automatically adapting to changing conditions and improving performance over time without constant manual intervention.",
      icon: "📈",
      benefits: [
        "Increasing returns on AI investment over time",
        "Automatic adaptation to changing business conditions",
        "Reduced maintenance costs through self-optimization",
        "Sustainable competitive advantage through perpetual improvement"
      ]
    }
  ];

  const [selectedDetail, setSelectedDetail] = useState(aiSolutionDetails[0]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
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
          <h2 className="text-3xl font-bold text-[#177399] mb-4">
            AI Solution Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Revolutionize your business with cutting-edge AI solutions that drive innovation, efficiency, and competitive advantage.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column with menu items */}
          <div className="md:w-1/3 flex flex-col gap-2 md:border-r border-gray-700 pr-4">
            {aiSolutionDetails.map((detail, index) => (
              <motion.div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer ${selectedDetail.title === detail.title ? 'bg-gray-800 border-l-4 border-[#177399]' : 'bg-gray-900 hover:bg-gray-800'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedDetail(detail)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{detail.icon}</span>
                  <h3 className="font-semibold text-white">
                    {detail.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column with detail content */}
          <div className="md:w-2/3 p-4">
            <motion.div 
              key={selectedDetail.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-6">{selectedDetail.icon}</div>
              <h3 className="text-2xl font-semibold text-[#177399] mb-4">
                {selectedDetail.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedDetail.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  {selectedDetail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#177399] mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ERP Solutions Detail Modal with enhanced content
const ERPSolutionsDetailModal = ({ isOpen, onClose }) => {
  const erpSolutionDetails = [
    {
      title: "Integrated ERP Systems",
      description: "Our comprehensive ERP solutions unify disparate business functions into a cohesive ecosystem with centralized data and standardized processes. We implement end-to-end systems that provide a single source of truth across your organization, eliminating silos and enabling seamless cross-departmental workflows.",
      icon: "🔄",
      benefits: [
        "Holistic visibility across all business operations",
        "Elimination of duplicate data entry and reconciliation",
        "Streamlined cross-functional processes and collaboration",
        "Consistent reporting and analytics across departments"
      ]
    },
    {
      title: "Process Automation",
      description: "We transform manual workflows into efficient automated processes that minimize human intervention while maximizing accuracy and throughput. Our automation frameworks handle routine tasks, complex approvals, and exception management, freeing your team to focus on strategic activities that drive business value.",
      icon: "⚙️",
      benefits: [
        "Dramatic reduction in processing time and operational costs",
        "Enhanced accuracy with elimination of manual errors",
        "Increased workforce productivity with focus on high-value tasks",
        "Consistent execution of business processes across the organization"
      ]
    },
    {
      title: "Business Intelligence",
      description: "Our ERP solutions incorporate sophisticated analytics capabilities that transform operational data into strategic insights. We implement customized dashboards, KPI tracking, and predictive analytics that provide real-time visibility into business performance and enable data-driven decision making at all levels.",
      icon: "📊",
      benefits: [
        "Real-time insights for agile decision making",
        "Proactive identification of issues before they impact the business",
        "Performance optimization through data-driven strategies",
        "Enhanced forecasting accuracy for better resource planning"
      ]
    },
    {
      title: "Implementation Excellence",
      description: "Our proven implementation methodology ensures smooth transitions to new ERP systems with minimal business disruption. We combine technical expertise with change management best practices to drive user adoption, accelerate time-to-value, and maximize return on your ERP investment.",
      icon: "🚀",
      benefits: [
        "Reduced implementation risk through methodical approach",
        "Accelerated user adoption with comprehensive training",
        "Minimized business disruption during transition",
        "Faster realization of efficiency and productivity gains"
      ]
    }
  ];

  const [selectedDetail, setSelectedDetail] = useState(erpSolutionDetails[0]);

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-gray-900 rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
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
          <h2 className="text-3xl font-bold text-[#177399] mb-4">
            ERP Solution Services
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Transform your operational efficiency with integrated ERP solutions that streamline processes, enhance visibility, and drive sustainable business growth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column with menu items */}
          <div className="md:w-1/3 flex flex-col gap-2 md:border-r border-gray-700 pr-4">
            {erpSolutionDetails.map((detail, index) => (
              <motion.div 
                key={index}
                className={`p-4 rounded-lg cursor-pointer ${selectedDetail.title === detail.title ? 'bg-gray-800 border-l-4 border-[#177399]' : 'bg-gray-900 hover:bg-gray-800'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedDetail(detail)}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{detail.icon}</span>
                  <h3 className="font-semibold text-white">
                    {detail.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Column with detail content */}
          <div className="md:w-2/3 p-4">
            <motion.div 
              key={selectedDetail.title}
              className="bg-gray-800 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-6">{selectedDetail.icon}</div>
              <h3 className="text-2xl font-semibold text-[#177399] mb-4">
                {selectedDetail.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedDetail.description}
              </p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-3">Key Benefits</h4>
                <ul className="space-y-2 text-gray-300">
                  {selectedDetail.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#177399] mr-2">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Services component
const ServiceSection = () => {
  const [openModal, setOpenModal] = useState(null);

  // Show modal based on service type
  const showModal = (serviceType) => {
    setOpenModal(serviceType);
  };

  // Close any open modal
  const closeModal = () => {
    setOpenModal(null);
  };

  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-lg p-6 h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: service.color }}
              >
                <CustomIcon name={service.iconName} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{service.description}</p>
              <button
                onClick={() => showModal(service.title)}
                className="text-[#177399] hover:text-white transition-colors flex items-center font-medium"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Render modals conditionally */}
      <EcommerceDetailModal 
        isOpen={openModal === "E-commerce"} 
        onClose={closeModal} 
      />
      <WebAppsDetailModal 
        isOpen={openModal === "Web Applications"} 
        onClose={closeModal} 
      />
      <MobileAppsDetailModal 
        isOpen={openModal === "Mobile Applications"} 
        onClose={closeModal} 
      />
      <AISolutionsDetailModal 
        isOpen={openModal === "AI Solutions"} 
        onClose={closeModal} 
      />
      <ERPSolutionsDetailModal 
        isOpen={openModal === "ERP Solutions"} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default ServiceSection;