import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

const testimonials = [
  {
    id: 1,
    author: {
      name: "Sarah Mitchell",
      title: "Founder, TechCorp",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "TechCorp",
      logo: "public/tech-corp-logo1.webp",
    },
    content:
      "Their team provides great design and has a great sense of user experience and aesthetics. They deliver on time and are excellent communicators.",
    rating: 3.5,
    color: "#00C2FF"
  },
  {
    id: 2,
    author: {
      name: "Michael Chen",
      title: "Co-founder, InnovateLabs",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "InnovateLabs",
      logo: "public/tech-corp-logo1.webp",
    },
    content:
      "Amazing developers with an eye for aesthetics. We had pretty vigorous requests and they hit every single one.",
    rating: 4,
    color: "#00E0A4"
  },
  {
    id: 3,
    author: {
      name: "Emma Thompson",
      title: "Medical Director, HealthTech",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "HealthTech",
      logo: "public/tech-corp-logo1.webp",
    },
    content:
      "They exceeded our expectations. Super easy to work with their engineering team, incredibly intelligent, and perceptive.",
    rating: 3.5,
    color: "#4D7CF3"
  },
  {
    id: 4,
    author: {
      name: "David Wilson",
      title: "Co-founder, CloudSys",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "CloudSys",
      logo: "public/tech-corp-logo1.webp",
    },
    content:
      "Working with them has been great! We've been working together for over 2 years now and the experience is just out of this planet.",
    rating: 5,
    color: "#00E099"
  },
  {
    id: 5,
    author: {
      name: "Rachel Adams",
      title: "Managing Director, DataFlow",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "DataFlow",
      logo: "public/tech-corp-logo1.webp",
    },
    content:
      "They are clearly the best dev agency I have worked with. The project went smoothly, and we're happy with the outcome!",
    rating: 4.5,
    color: "#00C2FF"
  },
  {
    id: 6,
    author: {
      name: "James Lee",
      title: "Co-Founder, TechVision",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "TechVision",
      logo: "public/tech-corp-logo1.webp",
    },
    content:
      "Excellent development services! I recently had the pleasure of working with them on a fintech project, and I am thoroughly impressed.",
    rating: 2.5,
    color: "#00E0A4"
  },
  {
    id: 7,
    author: {
      name: "Anna Martinez",
      title: "Principal Product Designer",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "DesignCo",
      logo: "public/tech-corp-logo1.webp",
    },
    content:
      "It doesn't feel like an external team, it feels like we're just working together. One team with one goal. Super happy!",
    rating: 5,
    color: "#4D7CF3"
  },
  {
    id: 8,
    author: {
      name: "Robert Kim",
      title: "Founder, WebAgency",
      image: "public/dummy-client.jpg",
    },
    company: {
      name: "WebAgency",
      logo: "public/tech-corp-logo1.webp",
    },
    content: "They have an incredible remote culture. It really makes working together easy and efficient.",
    rating: 4,
    color: "#00E099"
  },
];

const Testimonials = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black px-4 py-16 relative">
      {/* Background lines similar to your other sections */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-px bg-cyan-400" 
            style={{
              width: `${Math.random() * 30 + 40}%`,
              left: `${Math.random() * 60}%`,
              top: `${(i * 20) + Math.random() * 5}%`,
              transform: `rotate(${Math.random() * 5}deg)`,
              opacity: 0.5 + Math.random() * 0.5
            }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl relative z-10" ref={containerRef}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="mb-4 text-center text-lg font-medium uppercase tracking-wider text-cyan-400"
            variants={headingVariants}
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            className="mb-12 text-center text-3xl md:text-5xl font-bold text-white"
            variants={headingVariants}
          >
            Don't take our word for it
          </motion.h3>

          <motion.div className="grid gap-8 md:grid-cols-2" variants={containerVariants}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-black border border-gray-800 rounded-lg p-6 relative overflow-hidden cursor-pointer transition-all duration-300"
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(testimonial.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow */}
                <motion.div 
                  className="absolute -right-10 -top-10 w-20 h-20 rounded-full opacity-20"
                  style={{ background: testimonial.color }}
                  animate={{
                    scale: hoveredCard === testimonial.id ? [1, 1.2, 1] : 1,
                    transition: { duration: 1.5, repeat: hoveredCard === testimonial.id ? Infinity : 0 }
                  }}
                />

                {/* Rating */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <StarRating rating={testimonial.rating} />
                </motion.div>

                {/* Content */}
                <motion.p 
                  className="mt-4 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  {testimonial.content}
                </motion.p>

                {/* Author info */}
                <motion.div 
                  className="mt-6 flex items-center gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <motion.img 
                    src={testimonial.author.image || "/placeholder.svg"} 
                    alt="" 
                    className="h-12 w-12 rounded-full border-2"
                    style={{ borderColor: testimonial.color }}
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.author.title}</div>
                  </div>
                  <motion.img
                    src={testimonial.company.logo || "/placeholder.svg"}
                    alt={testimonial.company.name}
                    className="ml-auto h-8"
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>

                {/* Animated underline */}
                <motion.div 
                  className="h-0.5 mt-6 rounded-full"
                  style={{ 
                    background: `linear-gradient(to right, ${testimonial.color}, rgba(0, 194, 255, 0.3))` 
                  }}
                  initial={{ width: 0 }}
                  animate={{ 
                    width: hoveredCard === testimonial.id ? "100%" : "30%",
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;