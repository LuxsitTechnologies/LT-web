import React, { useEffect, useRef } from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaBehance } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

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
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Web Apps</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Mobile Apps</li>
              <li className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:translate-x-2" style={{ '--hover-color': '#177399' }}>Ai Solutions</li>
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-8 md:mb-0 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '600ms' }}>
            <h2 className="text-lg text-white">
              Offices — <span className="text-gray-400">US TR AU PK</span>
            </h2>
            <div className="space-y-2 text-gray-400 mt-2">
              <p>Got a question?</p>
              <p>Email us at <span className="text-blue-500 hover:underline cursor-pointer relative group" style={{ color: '#177399' }}>
              Info@luxsittechnologies.com
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
              </span></p>
              <p>Brøndby Strand 27, 2660, Copenhagen, Denmark</p>
              <p>Contact Us <span className="text-blue-500 hover:underline cursor-pointer relative group" style={{ color: '#177399' }}>
              +92 3042160000
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#177399' }}></span>
              </span></p>
            </div>
          </div>
          
          {/* Partner Logos */}
          <div className="flex items-center gap-6 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '700ms' }}>
            <div className="h-8 overflow-hidden relative group">
              <img src="google.png" alt="Google Partner" className="h-8 transition-transform duration-500 transform group-hover:scale-110" />
            </div>
            <div className="h-8 overflow-hidden relative group">
              <img src="awaards.jpg" alt="Awwwards" className="h-8 transition-transform duration-500 transform group-hover:scale-110" />
            </div>
            <div className="h-8 overflow-hidden relative group">
              <img src="Microsoft-Logo.png" alt="Microsoft" className="h-8 transition-transform duration-500 transform group-hover:scale-110" />
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
            <div className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1" style={{ '--hover-color': '#177399' }}>
              <FaLinkedin />
            </div>
            <div className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1" style={{ '--hover-color': '#177399' }}>
              <FaFacebook />
            </div>
            <div className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1" style={{ '--hover-color': '#177399' }}>
              <FaBehance />
            </div>
            <div className="hover:text-blue-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1" style={{ '--hover-color': '#177399' }}>
              <FaTwitter />
            </div>
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