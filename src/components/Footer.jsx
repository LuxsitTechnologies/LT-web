import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaBehance, FaPlus, FaMinus, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);
  const [selectedOffice, setSelectedOffice] = useState("PK");
  const [openFaqId, setOpenFaqId] = useState(null);

  const officeAddresses = {
    PK: "24N Commercial, DHA Phase 8 EX Air Avenue, Lahore",
    DK: "Brondby Strand 27, 2660, Copenhagen, Denmark",
  };

  const faqs = [
    {
      id: 1,
      question: "What service do you provide?",
      answer: "Lusxit Technologies offers a wide range of software solutions, including custom software development, mobile app development, cloud-based services, and IT consulting. We specialize in creating scalable and secure software tailored to your business needs."
    },
    {
      id: 2,
      question: "How do I get started with Luxsit Technologies?",
      answer: "Getting started is easy! Simply contact us through our website or call us directly. We'll schedule a consultation to understand your requirements and provide a roadmap for the project."
    },
    {
      id: 3,
      question: "What technologies do you use?",
      answer: "We work with the latest technologies including React, Angular, Node.js, Java, .NET, Python, and mobile platforms like iOS and Android. Our solutions are built with scalability, security, and performance in mind."
    },
    {
      id: 4,
      question: "How long does it take to complete a project?",
      answer: "The timeline for project completion depends on its complexity and the number of features involved. We will provide a detailed project timeline and milestones during the consultation phase, so you know exactly when to expect results."
    },
    {
      id: 5,
      question: "Do you provide ongoing support after the project is completed?",
      answer: "Yes, we offer ongoing maintenance and support after the project is completed. Whether it's for updates, bug fixes, or new features, our team is always ready to assist you."
    },
    {
      id: 6,
      question: "What is your development process?",
      answer: "Our development process follows industry best practices. We begin with a detailed analysis of your requirements, then move into design and development phases. After testing and quality assurance, we deploy your project and continue providing support as needed."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const handleOfficeClick = (office) => {
    setSelectedOffice(office);
  };

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <footer ref={footerRef} className="bg-black text-white py-16 relative overflow-hidden">
      {/* Content Container */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        
        {/* Footer Grid - Services, Technologies, Resources, Company */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          
          {/* Services */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '100ms' }}>
            <h3 className="text-lg font-semibold text-blue-500 mb-4 relative" style={{ color: '#177399' }}>
              Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500 transform transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Automation</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Web Application</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Mobile Application</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>AI Solutions</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Custom Software</li>
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-lg font-semibold text-blue-500 mb-4 relative" style={{ color: '#177399' }}>
              Technologies
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500 transform transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>React</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Laravel</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Flutter</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Python</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>.NET</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>AI/ML</li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-lg font-semibold text-blue-500 mb-4 relative" style={{ color: '#177399' }}>
              Company
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500 transform transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>About Us</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Careers</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Contact</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Blog</li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-blue-500 opacity-50 mb-8 animate-on-scroll opacity-0" style={{ borderColor: '#177399', transitionDelay: '500ms' }}></div>
        
        {/* Offices Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-8 md:mb-0 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '600ms' }}>
            <h2 className="text-lg text-white mb-2">
              Offices — {" "}
              <span className="text-gray-400">
                {Object.keys(officeAddresses).map((office, index) => (
                  <React.Fragment key={office}>
                    <span 
                      className={`cursor-pointer transition-colors duration-300 ${selectedOffice === office ? 'text-blue-500' : 'text-gray-400 hover:text-blue-400'}`}
                      onClick={() => handleOfficeClick(office)}
                      style={selectedOffice === office ? { color: '#177399' } : {}}
                    >
                      {office}
                    </span>
                    {index < Object.keys(officeAddresses).length - 1 && " "}
                  </React.Fragment>
                ))}
              </span>
            </h2>
            <div className="space-y-2 text-gray-400 mt-2">
              <p>Got a question?</p>
              <p>Email us at <span className="text-blue-500 hover:underline cursor-pointer relative group" style={{ color: '#177399' }}>
              Info@luxsittechnologies.com
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
              </span></p>
              
              <div className="min-h-12 transition-all duration-300">
                <p>{officeAddresses[selectedOffice]}</p>
              </div>
              
              <p>Contact Us <span className="text-blue-500 hover:underline cursor-pointer relative group" style={{ color: '#177399' }}>
              +92 3042160000
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
              </span></p>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="w-full md:w-1/2 lg:w-2/5 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '700ms' }}>
            <h3 className="text-lg font-semibold text-blue-500 mb-4 relative" style={{ color: '#177399' }}>
              Frequently Asked Questions
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500 transform transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-800 pb-2">
                  <div 
                    className="flex justify-between items-center cursor-pointer py-2"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h4 className="text-gray-300 font-medium">{faq.question}</h4>
                    <div className="text-blue-500 text-lg flex-shrink-0 ml-2" style={{ color: '#177399' }}>
                      {openFaqId === faq.id ? <FaMinus size={16} /> : <FaPlus size={16} />}
                    </div>
                  </div>
                  
                  <div 
                    className={`text-gray-400 text-sm overflow-hidden transition-all duration-300 ${
                      openFaqId === faq.id ? 'max-h-64 opacity-100 py-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-blue-500 opacity-50 mb-8 animate-on-scroll opacity-0" style={{ borderColor: '#177399', transitionDelay: '800ms' }}></div>
        
        {/* Footer Bottom - Copyright & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '900ms' }}>© 2025 LUXSIT TECHNOLOGIES. All rights reserved.</p>
          
          {/* Social Links */}
          <div className="flex gap-6 text-gray-400 text-xl mt-4 md:mt-0 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '1000ms' }}>
            <a 
              href="https://pk.linkedin.com/company/luxsit-technologies" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1" 
              style={{ '--hover-color': '#177399' }}
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://www.facebook.com/share/18PxuKiZqd/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1" 
              style={{ '--hover-color': '#177399' }}
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a 
              href="https://www.instagram.com/luxsittechnologies" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1" 
              style={{ '--hover-color': '#177399' }}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Add CSS for animations and color variables */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-on-scroll {
          transition: all 0.8s ease-out;
        }

        /* Add custom hover color for text elements */
        .hover\\:text-blue-500:hover {
          color: #177399 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;