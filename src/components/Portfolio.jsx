import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Updated data structure - removed gif properties and added related images
const sliderData = [
  [
    {
      color: "#e3e5e7",
      src: "/claimcore/project1img.png",
      title: "Claim Core",
      description: "The Claim Core Project is a centralized system that retrieves claim data via APIs and streamlines the entire claim lifecycle with validation workflows, role-based access, and real-time tracking.",
      relatedImages: [
        "/claimcore/2.png",
        "/claimcore/3.png",
        "/claimcore/4.png"
      ],
      link: "#",
    },
    {
      color: "#f2f2f2",
      src: "/GETXM/1.png",
      title: "GetXM – AI-Powered Customer Support",
      description: "GetXM is an intelligent chatbot solution that delivers instant, consistent, and on-brand responses. It automates customer support to boost satisfaction, save time, and let your team focus on what matters most.",
      relatedImages: [
        "/GETXM/2.png",
        "/GETXM/3.png",
        "/GETXM/4.png"
      ],
      link: "#",
    },
    {
      color: "#e5e5e5",
      src: "/pixel Tech/1.png",
      title: "Pixel Tech",
      description: "Pixel Tech is a creative 3D animation studio that transforms ideas into stunning, high-quality visuals. From dynamic storytelling to immersive effects, we bring your vision to life with precision and artistry.",
      relatedImages: [
        "/pixel Tech/2.png",
        "/pixel Tech/3.png",
        "/pixel Tech/4.png"
      ],
      link: "#",
    },
    {
      color: "#e3e5e7",
      src: "/medoptics/1.png",
      title: "MedOptics",
      description: "MedOptics is committed to enhancing lives through innovative optical solutions. We design advanced, personalized eyewear and vision care products tailored to meet the unique needs of every individual, ensuring clarity, comfort, and confidence.",
      relatedImages: [
        "/medoptics/2.png",
        "/medoptics/3.png",
        "/medoptics/4.png"
      ],
      link: "#",
    },
    {
      color: "#f5f5f5",
      src: "/tinytots/1.png",
      title: "TinyLilTots",
      description: "TinyLilTots as a vibrant and user-friendly online store for a kids' clothing brand. The website features a playful yet clean design, smooth navigation, and a seamless shopping experience tailored for parents looking for adorable and high-quality outfits for their little ones. Every detail—from color choices to layout—was crafted to reflect the charm and warmth of the brand.",
      relatedImages: [
        "/tinytots/2.png",
        "/tinytots/3.png",
        "/tinytots/4.png"
      ],
      link: "#",
    },
    {
      color: "#f5f5f5",
      src: "/nordicxpress/1.png",
      title: "Nordic Xpress",
      description: " Nordic Xpress website to deliver a seamless, modern, and informative experience for a premium transportation service. The site highlights key offerings like airport transfers, cruise port transfers, business travel, leisure travel, and private tours—each presented with intuitive icons and clear, engaging descriptions. Designed for both functionality and elegance, the website ensures users can easily find and book the services they need with confidence and ease.",
      relatedImages: [
        "/nordicxpress/2.png",
        "/nordicxpress/3.png",
        "/nordicxpress/4.png"
      ],
      link: "#",
    },
  ],
];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (selectedProject && e.target.id === "modal-overlay") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("click", closeOnClickOutside);
    return () => window.removeEventListener("click", closeOnClickOutside);
  }, [selectedProject]);

  return (
    <motion.div
      className="relative z-10 overflow-hidden bg-black pt-20 pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.h2 className="mb-8 text-center text-4xl font-bold text-white">
        Featured Projects
      </motion.h2>
      <motion.p className="mb-20 text-center text-xl text-white">
      </motion.p>

      {sliderData.map((slider, index) => (
        <Slider key={index} projects={slider} reverse={index % 2 !== 0} onProjectClick={setSelectedProject} />
      ))}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </motion.div>
  );
}

function Slider({ projects, reverse, onProjectClick }) {
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(sliderRef, { once: true });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setMaxScroll(containerRef.current.scrollWidth - containerRef.current.clientWidth);
    }
  }, [projects]);

  const handleScroll = (direction) => {
    if (!containerRef.current) return;
    
    const scrollAmount = containerRef.current.clientWidth * 0.6;
    const newPosition = direction === 'left' 
      ? Math.max(scrollPosition - scrollAmount, 0)
      : Math.min(scrollPosition + scrollAmount, maxScroll);
    
    containerRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };

  return (
    <div className="relative my-16">
      <motion.div 
        ref={sliderRef} 
        className="relative overflow-hidden"
      >
        <motion.div
          ref={containerRef}
          className="flex gap-6 px-4 md:px-10 pb-6 md:pb-10 md:gap-10 min-w-full overflow-x-scroll scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => onProjectClick(project)} />
          ))}
        </motion.div>
      </motion.div>

      {/* Left Arrow */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 z-10 shadow-lg"
        onClick={() => handleScroll('left')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          opacity: scrollPosition > 0 ? 1 : 0.3,
          x: [0, -5, 0],
          transition: { x: { repeat: Infinity, repeatType: "reverse", duration: 1.5 } }
        }}
        disabled={scrollPosition <= 0}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 z-10 shadow-lg"
        onClick={() => handleScroll('right')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          opacity: scrollPosition < maxScroll ? 1 : 0.3,
          x: [0, 5, 0],
          transition: { x: { repeat: Infinity, repeatType: "reverse", duration: 1.5 } }
        }}
        disabled={scrollPosition >= maxScroll}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>
    </div>
  );
}

Slider.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      relatedImages: PropTypes.arrayOf(PropTypes.string).isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  reverse: PropTypes.bool.isRequired,
  onProjectClick: PropTypes.func.isRequired,
};

function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[21vw] w-[32vw] shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer"
      style={{ backgroundColor: project.color }}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <motion.img
        src={project.src}
        alt={project.title}
        className="h-full w-full object-cover"
        animate={{ scale: isHovered ? 0.9 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      
      {/* Always visible title bar at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#737373] bg-opacity-60 text-white p-2">
        <h3 className="text-lg font-bold truncate">{project.title}</h3>
      </div>
      
      {/* Full overlay that appears on hover */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-[#737373] text-white p-4"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
      </motion.div>
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    relatedImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [project.src, ...project.relatedImages];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-[#737373] p-4 rounded-lg shadow-lg w-[80vw] max-w-4xl text-white"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button className="absolute top-4 right-2 bg-black hover:bg-gray-800 text-white px-3 py-1 rounded-full z-10" onClick={onClose}>
          ✕
        </button>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Main image and gallery */}
          <div className="relative w-full md:w-2/3">
            <div className="relative aspect-video">
              <motion.img 
                src={images[currentImageIndex]} 
                alt={`Project image ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover rounded-md shadow-md"
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Image navigation buttons */}
              <button 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md text-white"
                onClick={prevImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow-md text-white"
                onClick={nextImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 mt-4 flex-wrap">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`w-16 h-16 cursor-pointer rounded overflow-hidden border-2 ${currentImageIndex === idx ? 'border-white' : 'border-transparent'}`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Project details */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="mb-6">{project.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    relatedImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default Portfolio;