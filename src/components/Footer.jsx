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
            <h3 className="text-lg font-semibold text-green-500 mb-4 relative">
              Services
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500 transform transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Ideate</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Design</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Develop</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">MVP Development</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Custom Software</li>
            </ul>
          </div>
          
          {/* Technologies */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '200ms' }}>
            <h3 className="text-lg font-semibold text-green-500 mb-4 relative">
              Technologies
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500 transform transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">React</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Laravel</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Flutter</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Python</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">.NET</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">AI/ML</li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-lg font-semibold text-green-500 mb-4 relative">
              Resources
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500 transform transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">YouTube</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Affiliates</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Case Studies</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Portfolio</li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '400ms' }}>
            <h3 className="text-lg font-semibold text-green-500 mb-4 relative">
              Company
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-green-500 transform transition-all duration-300 group-hover:w-full"></span>
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">About Us</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Careers</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Contact</li>
              <li className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:translate-x-2">Blog</li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-green-500 opacity-50 mb-8 animate-on-scroll opacity-0" style={{ transitionDelay: '500ms' }}></div>
        
        {/* Offices Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-8 md:mb-0 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '600ms' }}>
            <h2 className="text-lg text-white">
              Offices — <span className="text-gray-400">US TR AU PK</span>
            </h2>
            <div className="space-y-2 text-gray-400 mt-2">
              <p>Got a question?</p>
              <p>Email us at <span className="text-green-500 hover:underline cursor-pointer relative group">
                hello@yourcompany.com
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </span></p>
              <p>Greater Boston, USA</p>
            </div>
          </div>
          
          {/* Partner Logos */}
          <div className="flex items-center gap-6 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '700ms' }}>
            <div className="h-8 overflow-hidden relative group">
              <img src="public/google.png" alt="Google Partner" className="h-8 transition-transform duration-500 transform group-hover:scale-110" />
            </div>
            <div className="h-8 overflow-hidden relative group">
              <img src="public/awaards.jpg" alt="Awwwards" className="h-8 transition-transform duration-500 transform group-hover:scale-110" />
            </div>
            <div className="h-8 overflow-hidden relative group">
              <img src="public/Microsoft-Logo.png" alt="Microsoft" className="h-8 transition-transform duration-500 transform group-hover:scale-110" />
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-green-500 opacity-50 mb-8 animate-on-scroll opacity-0" style={{ transitionDelay: '800ms' }}></div>
        
        {/* Footer Bottom - Copyright & Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '900ms' }}>© 2025 Your Company. All rights reserved.</p>
          
          {/* Social Links */}
          <div className="flex gap-6 text-gray-400 text-xl mt-4 md:mt-0 animate-on-scroll opacity-0 transform translate-y-4" style={{ transitionDelay: '1000ms' }}>
            <div className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1">
              <FaLinkedin />
            </div>
            <div className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1">
              <FaFacebook />
            </div>
            <div className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1">
              <FaTwitter />
            </div>
            <div className="hover:text-green-500 cursor-pointer transition duration-300 transform hover:scale-125 hover:-translate-y-1">
              <FaBehance />
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
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
      `}</style>
    </footer>
  );
};

export default Footer;