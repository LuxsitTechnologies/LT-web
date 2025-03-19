import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Palette, Code, Settings, TrendingUp } from "lucide-react";

export default function ProfileTimeline() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      icon: <Lightbulb size={20} className="text-green-500" />,
      title: "Ideate",
      description:
        "Whether you want to consult an idea, add missing capabilities, quickly expand your team, or hand over a project - we've got you covered.",
    },
    {
      icon: <Palette size={20} className="text-green-500" />,
      title: "Design",
      description:
        "Craft delightful user experiences for your digital products. Solve real problems and improve your vital business metrics through beautiful interfaces.",
    },
    {
      icon: <Code size={20} className="text-green-500" />,
      title: "Develop",
      description:
        "Create beautiful, fast, and secure applications tailored precisely to your business goals.",
    },
    {
      icon: <Settings size={20} className="text-green-500" />,
      title: "Maintain",
      description:
        "Our tech team is here to stay to make sure your users are entertained 24/7 while we build extraordinary systems on the go.",
    },
    {
      icon: <TrendingUp size={20} className="text-green-500" />,
      title: "Scale",
      description:
        "Scale bigger with us. Collaborating with us will have a lasting impact—gain the flexibility to adjust and expand!",
    },
  ];

  // Use IntersectionObserver to update the active section based on scroll.
  useEffect(() => {
    const observers = sections.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(`section-${index}`);
      if (element) observer.observe(element);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Calculate progress as a percentage based on the active section.
  const progressPercent =
    sections.length > 1 ? (activeSection / (sections.length - 1)) * 100 : 0;

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-400">
            AI-driven digital acceleration
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-20">
          {/* Profile Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Full digital product expertise under one roof
            </h2>
            <div className="space-y-6">
              <img
                src="public/luxsit_technologie.png"
                alt="Profile"
                width="400"
                height="400"
                className="rounded-2xl w-full max-w-sm mx-auto"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
                LUXSIT TECHNOLOGIES
              </h3>
              <div className="flex items-center gap-2 justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p className="text-gray-400 text-sm md:text-base">
                  Connect with one of our leads today
                </p>
              </div>
              <div className="flex justify-center">
                <button className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors text-base font-medium">
                  Book a free call
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Progress Line Container */}
            <div className="absolute left-5 top-5 md:left-[40px] md:top-[40px] w-0.5 h-[calc(100%-40px)] bg-white/10">
              <motion.div
                className="w-full bg-green-500"
                animate={{ height: `${progressPercent}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  id={`section-${index}`}
                  className="flex gap-6 md:gap-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative z-10 bg-black border border-white/10 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                    {section.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3
                      className={`text-xl md:text-2xl font-semibold mb-2 transition-colors duration-300 ${
                        index <= activeSection ? "text-green-500" : "text-gray-600"
                      }`}
                    >
                      {section.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base transition-colors duration-300 ${
                        index <= activeSection
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {section.description}
                    </p>
                    <div className="h-1 w-16 bg-green-500/80 mt-4 rounded-full"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}