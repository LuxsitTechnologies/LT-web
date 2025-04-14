import React from 'react';
import { motion } from 'framer-motion';

export default function TechnologyLogos() {
  const technologies = [
    {
      name: "React",
      logo: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
          <circle cx="50" cy="50" r="9" fill="#61DAFB" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="2.5" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" stroke="#61DAFB" strokeWidth="2.5" transform="rotate(-60 50 50)" />
        </svg>
      )
    },
    {
      name: "Laravel/PHP",
      logo: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
          <path d="M78 21L50 86 22 21h56z" fill="#FF2D20" />
          <path d="M50 76L28 26h44L50 76z" fill="#FFFFFF" opacity="0.1" />
          <path d="M61 31L50 62 39 31h22z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: "Flutter",
      logo: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
          <path d="M24 50L39 65L69 35H39L24 50Z" fill="#47C5FB" />
          <path d="M39 80L54 95L84 65H69L39 80Z" fill="#47C5FB" />
          <path d="M39 20H69L39 50L24 35L39 20Z" fill="#00569E" />
          <path d="M39 50L69 80L54 95L24 65L39 50Z" fill="#00B5F8" />
          <path d="M69 35L84 50L69 65L54 50L69 35Z" fill="#1A73E8" />
        </svg>
      )
    },
    {
      name: "Python",
      logo: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
          <path 
            d="M50 12c-14.5 0-13.5 6.2-13.5 6.2l.02 6.5h13.8v2H29.7s-9.2-1-9.2 13.5c0 14.4 8 13.8 8 13.8h4.8V48s-.3-8 8-8h13.5s7.6.1 7.6-7.4v-12.4s1.5-8.2-12.4-8.2zm-7.6 4.7c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5z" 
            fill="#366994" 
          />
          <path 
            d="M50 88c14.5 0 13.5-6.2 13.5-6.2l-.02-6.5h-13.8v-2h20.7s9.2 1 9.2-13.5c0-14.4-8-13.8-8-13.8h-4.8v6s.3 8-8 8h-13.5s-7.6-.1-7.6 7.4v12.4s-1.5 8.2 12.4 8.2zm7.6-4.7c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5z" 
            fill="#FFD43B" 
          />
        </svg>
      )
    },
    {
      name: ".NET",
      logo: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
          <rect x="0" y="0" width="100" height="100" fill="#512BD4" />
          <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fontSize="20" fill="white" fontWeight="bold">
            .NET
          </text>
        </svg>
      )
    },
    {
      name: "AI/ML",
      logo: (
        <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
          <circle cx="30" cy="30" r="6" fill="#0EA5E9" />
          <circle cx="70" cy="30" r="6" fill="#0EA5E9" />
          <circle cx="30" cy="50" r="6" fill="#0EA5E9" />
          <circle cx="70" cy="50" r="6" fill="#0EA5E9" />
          <circle cx="30" cy="70" r="6" fill="#0EA5E9" />
          <circle cx="70" cy="70" r="6" fill="#0EA5E9" />
          <circle cx="50" cy="40" r="6" fill="#0EA5E9" />
          <circle cx="50" cy="60" r="6" fill="#0EA5E9" />
          <line x1="30" y1="30" x2="50" y2="40" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="30" y1="30" x2="30" y2="50" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="30" y1="30" x2="70" y2="30" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="70" y1="30" x2="50" y2="40" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="30" y1="50" x2="50" y2="40" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="30" y1="50" x2="30" y2="70" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="30" y1="50" x2="50" y2="60" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="70" y1="50" x2="50" y2="40" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="70" y1="50" x2="70" y2="30" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="70" y1="50" x2="70" y2="70" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="70" y1="50" x2="50" y2="60" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="30" y1="70" x2="50" y2="60" stroke="#0EA5E9" strokeWidth="2" />
          <line x1="70" y1="70" x2="50" y2="60" stroke="#0EA5E9" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          TECHNOLOGIES 
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="bg-black p-4 rounded-lg">
                {tech.logo}
              </div>
              <p className="mt-2 text-lg font-medium">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
