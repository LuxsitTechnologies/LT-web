import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import PropTypes from "prop-types";

// Data structure remains the same
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
    {
      color: "#f5f5f5",
      src: "/jetclean/1.png",
      title: "Jet Clean",
      description: " Jet Clean offers professional and reliable laundry services, ensuring your clothes are cleaned, folded, and delivered with care. From everyday wear to delicate fabrics, we handle it all with top-quality equipment and attention to detail. Our service focuses on convenience, hygiene, and customer satisfaction, making laundry day hassle-free for individuals and families alike.",
      relatedImages: [
        "/jetclean/2.png",
        "/jetclean/3.png",
        "/jetclean/4.png"
      ],
      link: "#",
    },
    {
      color: "#f5f5f5",
      src: "/manqoosh/1.png",
      title: "Manqoosh",
      description: "Manqoosh Marketing & Advertising is a modern and innovative digital marketing agency based in Dubai, UAE. We specialize in delivering a full range of online advertising solutions and website design services tailored to help brands grow in the digital landscape. Our expertise spans social media marketing, SEO, PPC, branding, and creative design—empowering businesses to reach their audience effectively and make a lasting impact.",
      relatedImages: [
        "/manqoosh/3.png",
        "/manqoosh/3.png",
        "/manqoosh/4.png"
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
        FEATURED PROJECTS
      </motion.h2>
      <motion.p className="mb-20 text-center text-xl text-white">
      </motion.p>

      {sliderData.map((slider, index) => (
        <CurvedCarousel key={index} projects={slider} onProjectClick={setSelectedProject} />
      ))}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
      
      {/* Add curved screen styling */}
      <style jsx global>{`
        .carousel-container {
          position: relative;
          overflow: hidden;
          padding: 60px 0;
        }
        
        .carousel-track {
          position: relative;
          height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .carousel-item {
          position: absolute;
          transition: all 0.5s ease;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        
        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </motion.div>
  );
}

function CurvedCarousel({ projects, onProjectClick }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const isInView = useInView(carouselRef, { once: true });

  const totalItems = projects.length;
  const itemsToShow = Math.min(5, totalItems);
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };
  
  const getItemStyles = (index) => {
    // Get the relative position from current index
    let position = (index - currentIndex + totalItems) % totalItems;
    
    // Adjust position for optimal display
    if (position > totalItems / 2) position -= totalItems;
    
    // Middle item
    if (position === 0) {
      return {
        left: '50%',
        transform: 'translateX(-50%) scale(1)',
        zIndex: 5,
        opacity: 1,
        width: '32vw',
        height: '21vw',
        filter: 'brightness(100%)'
      };
    }
    
    // Items to the left of middle
    if (position === -1) {
      return {
        left: '25%',
        transform: 'translateX(-50%) scale(0.85) perspective(800px) rotateY(25deg)',
        zIndex: 4,
        opacity: 0.8,
        width: '28vw',
        height: '18vw',
        filter: 'brightness(70%)'
      };
    }
    
    if (position === -2) {
      return {
        left: '8%',
        transform: 'translateX(-50%) scale(0.7) perspective(800px) rotateY(35deg)',
        zIndex: 3,
        opacity: 0.6,
        width: '24vw',
        height: '16vw',
        filter: 'brightness(50%)'
      };
    }
    
    // Items to the right of middle
    if (position === 1) {
      return {
        left: '75%',
        transform: 'translateX(-50%) scale(0.85) perspective(800px) rotateY(-25deg)',
        zIndex: 4,
        opacity: 0.8,
        width: '28vw',
        height: '18vw',
        filter: 'brightness(70%)'
      };
    }
    
    if (position === 2) {
      return {
        left: '92%',
        transform: 'translateX(-50%) scale(0.7) perspective(800px) rotateY(-35deg)',
        zIndex: 3,
        opacity: 0.6,
        width: '24vw',
        height: '16vw',
        filter: 'brightness(50%)'
      };
    }
    
    // Other items - hide them
    return {
      left: position < 0 ? '-10%' : '110%',
      transform: 'translateX(-50%) scale(0.5)',
      zIndex: 1,
      opacity: 0,
      width: '20vw',
      height: '14vw',
      filter: 'brightness(30%)'
    };
  };

  return (
    <div className="relative my-16" ref={carouselRef}>
      <motion.div 
        className="carousel-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="carousel-track">
          {projects.map((project, index) => {
            const styles = getItemStyles(index);
            
            return (
              <motion.div
                key={index}
                className="carousel-item"
                style={{
                  ...styles,
                  backgroundColor: project.color,
                  cursor: index === currentIndex ? 'pointer' : styles.opacity > 0.5 ? 'pointer' : 'default'
                }}
                initial={false}
                animate={styles}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  if (index === currentIndex) {
                    onProjectClick(project);
                  } else if (styles.opacity > 0.5) {
                    setCurrentIndex(index);
                  }
                }}
              >
                <img 
                  src={project.src} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute bottom-0 left-0 right-0 bg-[#737373] bg-opacity-60 text-white p-2">
                    <h3 className="text-lg font-bold truncate">{project.title}</h3>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Arrow navigation buttons */}
        <motion.button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 z-10 shadow-lg"
          onClick={goToPrev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            x: [0, -5, 0],
            transition: { x: { repeat: Infinity, repeatType: "reverse", duration: 1.5 } }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        <motion.button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 z-10 shadow-lg"
          onClick={goToNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            x: [0, 5, 0],
            transition: { x: { repeat: Infinity, repeatType: "reverse", duration: 1.5 } }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-8 bg-white' : 'w-2 bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

CurvedCarousel.propTypes = {
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
  onProjectClick: PropTypes.func.isRequired,
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

export default Portfolio;