"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import PropTypes from "prop-types"

// Data structure remains the same
const sliderData = [
  [
    {
      color: "#e3e5e7",
      src: "/claimcore/project1img.png",
      title: "Claim Core",
      description:
        "The Claim Core Project is a centralized system that retrieves claim data via APIs and streamlines the entire claim lifecycle with validation workflows, role-based access, and real-time tracking.",
      relatedImages: ["/claimcore/2.png", "/claimcore/3.png", "/claimcore/4.png"],
      link: "#",
    },
    // Other projects remain the same
    {
      color: "#f2f2f2",
      src: "/GETXM/1.png",
      title: "GetXM – AI-Powered Customer Support",
      description:
        "GetXM is an intelligent chatbot solution that delivers instant, consistent, and on-brand responses. It automates customer support to boost satisfaction, save time, and let your team focus on what matters most.",
      relatedImages: ["/GETXM/2.png", "/GETXM/3.png", "/GETXM/4.png"],
      link: "#",
    },
    {
      color: "#e5e5e5",
      src: "/pixel Tech/1.png",
      title: "Pixel Tech",
      description:
        "Pixel Tech is a creative 3D animation studio that transforms ideas into stunning, high-quality visuals. From dynamic storytelling to immersive effects, we bring your vision to life with precision and artistry.",
      relatedImages: ["/pixel Tech/2.png", "/pixel Tech/3.png", "/pixel Tech/4.png"],
      link: "#",
    },
    {
      color: "#e3e5e7",
      src: "/medoptics/1.png",
      title: "MedOptics",
      description:
        "MedOptics is committed to enhancing lives through innovative optical solutions. We design advanced, personalized eyewear and vision care products tailored to meet the unique needs of every individual, ensuring clarity, comfort, and confidence.",
      relatedImages: ["/medoptics/2.png", "/medoptics/3.png", "/medoptics/4.png"],
      link: "#",
    },
    {
      color: "#f5f5f5",
      src: "/tinytots/1.png",
      title: "TinyLilTots",
      description:
        "TinyLilTots as a vibrant and user-friendly online store for a kids' clothing brand. The website features a playful yet clean design, smooth navigation, and a seamless shopping experience tailored for parents looking for adorable and high-quality outfits for their little ones. Every detail—from color choices to layout—was crafted to reflect the charm and warmth of the brand.",
      relatedImages: ["/tinytots/2.png", "/tinytots/3.png", "/tinytots/4.png"],
      link: "#",
    },
    {
      color: "#f5f5f5",
      src: "/nordicxpress/1.png",
      title: "Nordic Xpress",
      description:
        " Nordic Xpress website to deliver a seamless, modern, and informative experience for a premium transportation service. The site highlights key offerings like airport transfers, cruise port transfers, business travel, leisure travel, and private tours—each presented with intuitive icons and clear, engaging descriptions. Designed for both functionality and elegance, the website ensures users can easily find and book the services they need with confidence and ease.",
      relatedImages: ["/nordicxpress/2.png", "/nordicxpress/3.png", "/nordicxpress/4.png"],
      link: "#",
    },
    {
      color: "#f5f5f5",
      src: "/jetclean/1.png",
      title: "Jet Clean",
      description:
        " Jet Clean offers professional and reliable laundry services, ensuring your clothes are cleaned, folded, and delivered with care. From everyday wear to delicate fabrics, we handle it all with top-quality equipment and attention to detail. Our service focuses on convenience, hygiene, and customer satisfaction, making laundry day hassle-free for individuals and families alike.",
      relatedImages: ["/jetclean/2.png", "/jetclean/3.png", "/jetclean/4.png"],
      link: "#",
    },
    {
      color: "#f5f5f5",
      src: "/manqoosh/1.png",
      title: "Manqoosh",
      description:
        "Manqoosh Marketing & Advertising is a modern and innovative digital marketing agency based in Dubai, UAE. We specialize in delivering a full range of online advertising solutions and website design services tailored to help brands grow in the digital landscape. Our expertise spans social media marketing, SEO, PPC, branding, and creative design—empowering businesses to reach their audience effectively and make a lasting impact.",
      relatedImages: ["/manqoosh/3.png", "/manqoosh/3.png", "/manqoosh/4.png"],
      link: "#",
    },
  ],
]

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const closeOnClickOutside = (e) => {
      if (selectedProject && e.target.id === "modal-overlay") {
        setSelectedProject(null)
      }
    }
    window.addEventListener("click", closeOnClickOutside)
    return () => window.removeEventListener("click", closeOnClickOutside)
  }, [selectedProject])

  return (
    <motion.div
      className="relative z-0 overflow-hidden bg-black pt-20 pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <motion.h2 className="mb-8 text-center text-4xl font-bold text-white">FEATURED PROJECTS</motion.h2>
      <motion.p className="mb-20 text-center text-xl text-white"></motion.p>

      {sliderData.map((slider, index) => (
        <CurvedCarousel key={index} projects={slider} onProjectClick={setSelectedProject} />
      ))}

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

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
        
        /* Adjust carousel height for mobile */
        @media (max-width: 768px) {
          .carousel-track {
            height: 350px;
          }
        }
        
        .carousel-item {
          position: absolute;
          transition: all 0.8s cubic-bezier(0.33, 1, 0.68, 1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        
        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background-color: #333;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Custom cursor transitions */
        .carousel-item {
          cursor: default;
          transition: all 0.8s cubic-bezier(0.33, 1, 0.68, 1), cursor 0.3s ease;
        }
        
        .carousel-item.clickable {
          cursor: pointer;
        }
      `}</style>
    </motion.div>
  )
}

function CurvedCarousel({ projects, onProjectClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const carouselRef = useRef(null)
  const isInView = useInView(carouselRef, { once: true })
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const totalItems = projects.length

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems)
  }

  const getItemStyles = (index) => {
    // Get the relative position from current index
    let position = (index - currentIndex + totalItems) % totalItems

    // Adjust position for optimal display
    if (position > totalItems / 2) position -= totalItems

    // Calculate aspect ratio to preserve full image
    const aspectRatio = 16 / 9 // Default aspect ratio

    // Mobile view adjustments
    if (isMobile) {
      // Middle item - larger for mobile
      if (position === 0) {
        return {
          left: "50%",
          transform: "translateX(-50%) scale(1)",
          zIndex: 5,
          opacity: 1,
          width: "75vw", // Increased from 32vw for mobile
          height: "auto",
          aspectRatio: aspectRatio,
          filter: "brightness(100%)",
          isClickable: true,
        }
      }

      // Only show one item on each side for mobile
      if (position === -1) {
        return {
          left: "15%",
          transform: "translateX(-50%) scale(0.7) perspective(800px) rotateY(25deg)",
          zIndex: 4,
          opacity: 0.7,
          width: "40vw", // Increased for mobile
          height: "auto",
          aspectRatio: aspectRatio,
          filter: "brightness(60%)",
          isClickable: true,
        }
      }

      if (position === 1) {
        return {
          left: "85%",
          transform: "translateX(-50%) scale(0.7) perspective(800px) rotateY(-25deg)",
          zIndex: 4,
          opacity: 0.7,
          width: "40vw", // Increased for mobile
          height: "auto",
          aspectRatio: aspectRatio,
          filter: "brightness(60%)",
          isClickable: true,
        }
      }

      // Hide other items on mobile
      return {
        left: position < 0 ? "-20%" : "120%",
        transform: "translateX(-50%) scale(0.4)",
        zIndex: 1,
        opacity: 0,
        width: "30vw",
        height: "auto",
        aspectRatio: aspectRatio,
        filter: "brightness(30%)",
        isClickable: false,
      }
    }

    // Desktop view - original settings
    if (position === 0) {
      return {
        left: "50%",
        transform: "translateX(-50%) scale(1)",
        zIndex: 5,
        opacity: 1,
        width: "32vw",
        height: "auto",
        aspectRatio: aspectRatio,
        filter: "brightness(100%)",
        isClickable: true,
      }
    }

    // Items to the left of middle
    if (position === -1) {
      return {
        left: "25%",
        transform: "translateX(-50%) scale(0.85) perspective(800px) rotateY(25deg)",
        zIndex: 4,
        opacity: 0.8,
        width: "28vw",
        height: "auto",
        aspectRatio: aspectRatio,
        filter: "brightness(70%)",
        isClickable: true,
      }
    }

    if (position === -2) {
      return {
        left: "8%",
        transform: "translateX(-50%) scale(0.7) perspective(800px) rotateY(35deg)",
        zIndex: 3,
        opacity: 0.6,
        width: "24vw",
        height: "auto",
        aspectRatio: aspectRatio,
        filter: "brightness(50%)",
        isClickable: true,
      }
    }

    // Items to the right of middle
    if (position === 1) {
      return {
        left: "75%",
        transform: "translateX(-50%) scale(0.85) perspective(800px) rotateY(-25deg)",
        zIndex: 4,
        opacity: 0.8,
        width: "28vw",
        height: "auto",
        aspectRatio: aspectRatio,
        filter: "brightness(70%)",
        isClickable: true,
      }
    }

    if (position === 2) {
      return {
        left: "92%",
        transform: "translateX(-50%) scale(0.7) perspective(800px) rotateY(-35deg)",
        zIndex: 3,
        opacity: 0.6,
        width: "24vw",
        height: "auto",
        aspectRatio: aspectRatio,
        filter: "brightness(50%)",
        isClickable: true,
      }
    }

    // Other items - hide them
    return {
      left: position < 0 ? "-10%" : "110%",
      transform: "translateX(-50%) scale(0.5)",
      zIndex: 1,
      opacity: 0,
      width: "20vw",
      height: "auto",
      aspectRatio: aspectRatio,
      filter: "brightness(30%)",
      isClickable: false,
    }
  }

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
            const styles = getItemStyles(index)
            const isClickable = styles.isClickable
            delete styles.isClickable

            return (
              <motion.div
                key={index}
                className={`carousel-item ${isClickable ? "clickable" : ""}`}
                style={{
                  ...styles,
                  backgroundColor: project.color,
                }}
                initial={false}
                animate={styles}
                transition={{
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1], // Cubic bezier for smoother transitions
                }}
                onClick={() => {
                  if (index === currentIndex) {
                    onProjectClick(project)
                  } else if (isClickable) {
                    setCurrentIndex(index)
                  }
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={isClickable ? { scale: styles.transform.includes("scale(1)") ? 1.05 : 0.9 } : {}}
              >
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.src || "/placeholder.svg"}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                {index === currentIndex && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-[#737373] bg-opacity-80 text-white p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-lg font-bold truncate">{project.title}</h3>
                    <p className="text-sm truncate">{project.description.substring(0, 60)}...</p>
                  </motion.div>
                )}

                {/* Show hover effect for non-center items */}
                {index !== currentIndex && hoveredIndex === index && isClickable && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-[#737373] bg-opacity-80 text-white p-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-sm font-medium truncate">{project.title}</h3>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Arrow navigation buttons */}
        <motion.button
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 z-10 shadow-lg"
          onClick={goToPrev}
          whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: [0, -5, 0],
            transition: { x: { repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 1.5 } },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </motion.button>

        <motion.button
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-3 z-10 shadow-lg"
          onClick={goToNext}
          whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
          whileTap={{ scale: 0.95 }}
          animate={{
            x: [0, 5, 0],
            transition: { x: { repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 1.5 } },
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${currentIndex === index ? "w-8 bg-white" : "w-2 bg-gray-500"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
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
    }),
  ).isRequired,
  onProjectClick: PropTypes.func.isRequired,
}

function ProjectModal({ project, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [project.src, ...project.relatedImages]
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <motion.div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={`relative bg-[#737373] p-4 rounded-lg shadow-xl ${
          isMobile ? "w-[90vw]" : "w-[70vw]"
        } max-w-4xl text-white max-h-[90vh] overflow-y-auto`}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button
          className="absolute top-3 right-3 bg-black hover:bg-gray-800 text-white px-2 py-1 rounded-full z-10 transition-all duration-300"
          onClick={onClose}
        >
          ✕
        </button>

        <div className={`flex ${isMobile ? "flex-col" : "flex-row"} gap-4`}>
          {/* Main image and gallery */}
          <div className={`relative w-full ${isMobile ? "" : "md:w-3/5"}`}>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <motion.img
                src={images[currentImageIndex]}
                alt={`Project image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Image navigation buttons */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow-md text-white transition-all duration-300"
                onClick={prevImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 shadow-md text-white transition-all duration-300"
                onClick={nextImage}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Thumbnails - smaller on mobile */}
            <div className="flex gap-2 mt-3 flex-wrap">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={`${
                    isMobile ? "w-10 h-10" : "w-12 h-12"
                  } cursor-pointer rounded overflow-hidden border-2 transition-all duration-300 ${
                    currentImageIndex === idx ? "border-white" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImageIndex(idx)}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Project details */}
          <div className={`w-full ${isMobile ? "mt-4" : "md:w-2/5"}`}>
            <h2 className="text-xl font-bold mb-3">{project.title}</h2>
            <p className={`${isMobile ? "text-sm" : "text-sm"}`}>{project.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
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
}

export default Portfolio