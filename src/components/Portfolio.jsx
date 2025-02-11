import { useRef, useState, useEffect } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useInView,
  useAnimation,
} from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes

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
      color: "#d6d7dc",
      src: "decimal.jpg",
      gif: "decimal.gif",
      gifThumb: "decimal-thumb.jpg",
      link: "#",
    },
    {
      color: "#e3e3e3",
      src: "funny.jpg",
      gif: "funny.gif",
      gifThumb: "funny-thumb.jpg",
      link: "#",
    },
    {
      color: "#21242b",
      src: "google.jpg",
      gif: "google.gif",
      gifThumb: "google-thumb.jpg",
      link: "#",
    },
  ],
];

function Portfolio() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div
      ref={container}
      className="relative z-10 overflow-hidden bg-black pt-20 pb-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2
        className="mb-8 text-center text-4xl font-bold text-white"
        style={{
          opacity: opacity,
          y: useTransform(scrollYProgress, [0, 0.5], [50, 0]),
        }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="mb-20 text-center text-xl text-white"
        style={{
          opacity: opacity,
          y: useTransform(scrollYProgress, [0, 0.5], [50, 0]),
        }}
      >
        Check out our projects, each of them equally aced.
      </motion.p>

      {sliderData.map((slider, index) => (
        <Slider key={index} projects={slider} reverse={index % 2 !== 0} y={y} />
      ))}
    </motion.div>
  );
}

function Slider({ projects, reverse, y }) {
  const sliderRef = useRef(null);
  const isInView = useInView(sliderRef, { once: false, amount: 0.2 });
  const controls = useAnimation();
  const x = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const sliderVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const handleCardHover = (cardEl) => {
    if (sliderRef.current && cardEl) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();
      const offset = sliderRect.left - cardRect.left;
      x.set(offset);
    }
  };

  const handleCardHoverEnd = () => x.set(0);

  return (
    <motion.div
      ref={sliderRef}
      variants={sliderVariants}
      initial="hidden"
      animate={controls}
      style={{ y }}
      className={`slider ${reverse ? "reverse" : ""}`}
    >
      <motion.div
        style={{ x }}
        className={`flex gap-4 px-2 md:px-8 pb-4 md:pb-8 md:gap-8 ${
          reverse ? "justify-end" : ""
        }`}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onCardHover={handleCardHover}
            onCardHoverEnd={handleCardHoverEnd}
          />
        ))}
      </motion.div>
    </motion.div>
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
  y: PropTypes.object.isRequired,
};

function ProjectCard({ project, onCardHover, onCardHoverEnd }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const cardControls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    cardControls.start({ scale: 1.05 });
    if (cardRef.current) onCardHover(cardRef.current);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    cardControls.start({ scale: 1 });
    onCardHoverEnd();
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-[21vw] w-[32vw] shrink-0 overflow-hidden rounded-lg shadow-lg"
      style={{ backgroundColor: project.color }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      animate={cardControls}
    >
      <motion.div
        className="h-full w-full"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img
          src={isHovered ? project.gif : project.src}
          alt="Project"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {isHovered && (
        <motion.a
          href={project.link || "#"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded text-sm shadow-lg">
            View Project
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              stroke="#fff"
              width={12}
            >
              <polyline points="18.7 12.4 18.7 5.3 11.6 5.3" />
              <line x1="5.3" y1="18.7" x2="17.1" y2="6.9" />
            </svg>
          </button>
        </motion.a>
      )}
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
  onCardHover: PropTypes.func.isRequired,
  onCardHoverEnd: PropTypes.func.isRequired,
};

export default Portfolio;
