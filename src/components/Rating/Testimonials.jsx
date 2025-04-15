import { useState, useRef } from "react";
import { motion } from "framer-motion";
import StarRating from "./StarRating";

const testimonials = [
  {
    id: 1,
    author: {
      name: "Asem Raza",
      title: "Getxm",
      image: "/getxm.jpg",
    },
    content:
      "Working with Luxsit Technologies was a great experience. Their team is professional, responsive, and technically strong. They helped us with a custom development project at Getxm and delivered quality results on time. Highly recommended for reliable tech solutions.",
    rating: 5,
    color: "#177399",
  },
  {
    id: 2,
    author: {
      name: "Tanveer Shareef",
      title: "Jetclean",
      image: "/jet clean.jpg",
    },
    content:
      "Luxsit Technologies has been a reliable tech partner for Jetclean. They built a software solution that fits our business needs well. The team was responsive, easy to work with, and open to feedback. Overall, we’re happy with the outcome and would consider working with them again in the future.",
    rating: 4.5,
    color: "#177399",
  },
  {
    id: 3,
    author: {
      name: "Hassan Raza",
      title: "Pixel Tech",
      image: "/pixeltech-logo.jpg",
    },
    content:
      "We worked with Luxsit Technologies on our website at Pixel Tech, and the experience was smooth overall. They handled both the design and development professionally and were open to our input throughout the process. There were a few adjustments along the way, but the team stayed responsive and made sure we got the result we wanted. We’re satisfied with the final site and appreciate their effort.",
    rating: 5,
    color: "#177399",
  },
  {
    id: 4,
    author: {
      name: "Jibran Akmal",
      title: "NXL",
      image: "/nordicxpress.jpg",
    },
    content:
      "Luxsit Technologies played a key role in helping us build and grow our platform at NXL. They understood our needs quickly and delivered solid results on time. Their team has been professional, responsive, and easy to work with throughout the process.",
    rating: 5,
    color: "#177399",
  },
  {
    id: 5,
    author: {
      name: "Muhammad Afaq",
      title: "Travel Tales and Tourism",
      image: "/traveltales.webp",
    },
    content:
      "Working with Luxsit Technologies on our Travel Tales website was a smooth experience. They took the time to understand what we needed and translated it into a site that works well and looks great. The process was straightforward, and their team was easy to communicate with.",
    rating: 4.5,
    color: "#177399",
  }
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
            className="absolute h-px bg-blue-400"
            style={{
              width: `${Math.random() * 30 + 40}%`,
              left: `${Math.random() * 60}%`,
              top: `${i * 20 + Math.random() * 5}%`,
              transform: `rotate(${Math.random() * 5}deg)`,
              opacity: 0.5 + Math.random() * 0.5,
              backgroundColor: "#177399",
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
className="mb-8 text-center text-2xl md:text-4xl font-bold uppercase tracking-wide text-white pt-4"
variants={headingVariants}
          >
            Testimonials
          </motion.h2>
          <motion.h3
            className="mb-12 text-center text-lg md:text-xl font-medium text-white"
            variants={headingVariants}
          >
            Don't take our word for it
          </motion.h3>

          <motion.div
            className="grid gap-8 md:grid-cols-2"
            variants={containerVariants}
          >
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
                    transition: {
                      duration: 1.5,
                      repeat: hoveredCard === testimonial.id ? Infinity : 0,
                    },
                  }}
                />

                {/* Rating */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <StarRating rating={testimonial.rating} color="#177399" />
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
                    <div className="font-semibold" style={{ color: "#177399" }}>
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.author.title}
                    </div>
                  </div>
                </motion.div>

                {/* Animated underline */}
                <motion.div
                  className="h-0.5 mt-6 rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${testimonial.color}, rgba(23, 115, 153, 0.3))`,
                  }}
                  initial={{ width: 0 }}
                  animate={{
                    width: hoveredCard === testimonial.id ? "100%" : "30%",
                    transition: { duration: 0.3 },
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