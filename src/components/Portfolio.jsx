import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import PropTypes from "prop-types";

const sliderData = [
  [
    {
      color: "#e3e5e7",
      src: "https://blog.appseed.us/content/images/size/w2000/2021/11/django-material-kit-hero-1.jpg",
      gif: "https://blog.appseed.us/content/images/2021/11/ct-material-kit2-intro.gif",
      gifThumb: "c2-thumb.jpg",
      link: "#",
    },
    {
      color: "#e3e5e7",
      src: "https://blog.appseed.us/content/images/size/w2000/2021/11/django-material-kit-hero-1.jpg",
      gif: "https://blog.appseed.us/content/images/2021/11/ct-material-kit2-intro.gif",
      gifThumb: "c2-thumb.jpg",
      link: "#",
    },
    {
      color: "#e3e5e7",
      src: "https://blog.appseed.us/content/images/size/w2000/2021/11/django-material-kit-hero-1.jpg",
      gif: "https://blog.appseed.us/content/images/2021/11/ct-material-kit2-intro.gif",
      gifThumb: "c2-thumb.jpg",
      link: "#",
    },
    {
      color: "#e3e5e7",
      src: "https://blog.appseed.us/content/images/size/w2000/2021/11/django-material-kit-hero-1.jpg",
      gif: "https://blog.appseed.us/content/images/2021/11/ct-material-kit2-intro.gif",
      gifThumb: "c2-thumb.jpg",
      link: "#",
    },
    {
      color: "#e3e5e7",
      src: "https://blog.appseed.us/content/images/size/w2000/2021/11/django-material-kit-hero-1.jpg",
      gif: "https://blog.appseed.us/content/images/2021/11/ct-material-kit2-intro.gif",
      gifThumb: "c2-thumb.jpg",
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
        Check out our projects, each of them equally aced.
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
  const { scrollYProgress } = useScroll({ target: sliderRef });
  const isInView = useInView(sliderRef, { once: true });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const x = useTransform(scrollYProgress, [0, 1], reverse ? [150, -150] : [-150, 150]);
  const xSpring = useSpring(x, { stiffness: 50, damping: 15 });

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
      gif: PropTypes.string.isRequired,
      gifThumb: PropTypes.string.isRequired,
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
        src={isHovered ? project.gif : project.src}
        alt="Project"
        className="h-full w-full object-cover"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    color: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    gif: PropTypes.string.isRequired,
    gifThumb: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative bg-white p-4 rounded-lg shadow-lg w-[40vw] max-w-md"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <button className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-black px-3 py-1 rounded-full" onClick={onClose}>
          ✕
        </button>
        <img src={project.gif} alt="Expanded Project" className="w-full rounded-md shadow-md" />
        <div className="mt-4 flex justify-center">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-black text-white px-4 py-2 rounded">
            Visit Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.shape({
    gif: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

// Add this to your CSS or as a style tag to hide scrollbars
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