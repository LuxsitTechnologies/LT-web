import  { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProfileTimeline() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      icon: "/placeholder.svg?height=40&width=40",
      title: "Ideate",
      description:
        "Whether you want to consult an idea, add missing capabilities, quickly expand your team, or hand over a project - we've got you covered.",
    },
    {
      icon: "/placeholder.svg?height=40&width=40",
      title: "Design",
      description:
        "Craft delightful user experiences for your digital products. Solve real problems and improve your vital business metrics through beautiful interfaces.",
    },
    {
      icon: "/placeholder.svg?height=40&width=40",
      title: "Develop",
      description:
        "Create beautiful, fast, and secure applications tailored precisely to your business goals.",
    },
    {
      icon: "/placeholder.svg?height=40&width=40",
      title: "Maintain",
      description:
        "Our tech team is here to stay to make sure your users are entertained 24/7 while we build extraordinary systems on the go.",
    },
    {
      icon: "/placeholder.svg?height=40&width=40",
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
  // With 5 sections, progress moves in increments of 25%.
  const progressPercent =
    sections.length > 1 ? (activeSection / (sections.length - 1)) * 100 : 0;

  return (
    <div className="min-h-screen bg-black" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-20">
          {/* Profile Section */}
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-white leading-tight">
              Full digital product expertise under one roof
            </h1>
            <div className="space-y-4">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Profile"
                width="400"
                height="400"
                className="rounded-2xl"
              />
              <h2 className="text-3xl font-bold text-white">Luxsit</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <p className="text-gray-400">
                  Connect with one of our leads today
                </p>
              </div>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Book a free call
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Progress Line Container */}
            <div className="absolute left-[40px] top-[40px] w-0.5 h-[calc(100%-80px)] bg-white/20">
              <motion.div
                className="w-full bg-white"
                animate={{ height: `${progressPercent}%` }}
                transition={{ duration: 2.0, ease: "easeOut" }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  id={`section-${index}`}
                  className="flex gap-8"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <div className="relative z-10 bg-black p-4 w-20 h-20 flex items-center justify-center">
                    <img
                      src={section.icon || "/placeholder.svg"}
                      alt={section.title}
                      width="40"
                      height="40"
                    />
                  </div>
                  <div className="flex-1 pt-4">
                    <h3
                      className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                        index <= activeSection ? "text-white" : "text-gray-600"
                      }`}
                    >
                      {section.title}
                    </h3>
                    <p
                      className={`transition-colors duration-300 ${
                        index <= activeSection
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {section.description}
                    </p>
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
