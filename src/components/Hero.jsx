import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#147497"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 0.6, 0.3] }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 0px 8px rgb(59, 130, 246)",
    transition: {
      duration: 0.3,
    },
  },
}

function Hero() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  return (
    <motion.div
      className="relative min-h-screen w-full flex items-start justify-center pt-40 overflow-hidden bg-black text-white"
    >
      {/* Shift SVG lines upward by applying a transform on the container */}
      <div className="absolute inset-0 pointer-events-none transform -translate-y-60 md:-translate-y-25">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight"
            variants={textVariants}
            custom={0}
          >
            We help startups build amazing products
          </motion.h1>
          <motion.p className="text-xl mb-8 text-gray-300" variants={textVariants} custom={1}>
            Luxsit Technologies is a non-conventional dev agency in New York, specializing in creating world-class AI, web and mobile apps.
          </motion.p>

          <motion.div variants={textVariants} custom={2}>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
              whileHover="hover"
              variants={buttonVariants}
            >
              Got A Project? Let's Talk!
            </motion.button>
          </motion.div>

          <motion.div className="mt-12 flex items-center justify-center" variants={textVariants} custom={3}>
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={``}
                    alt={`Client ${i}`}
                    width="48"
                    height="48"
                    className="rounded-full border-2 border-white"
                  />
                </motion.div>
              ))}
            </div>
            <div className="ml-4 text-left">
              <motion.p
                className="font-semibold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                200+ successful clients.
              </motion.p>
              <motion.a
                href="#testimonials"
                className="text-blue-400 hover:underline inline-block"
                whileHover={{ x: 5, color: "#60A5FA" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Read testimonials →
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero
