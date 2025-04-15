import { useEffect, useRef } from 'react';

const Company = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.04; // Reduced speed for smoother movement
    const totalWidth = scrollContainer.scrollWidth;

    // Clone the logos to create infinite scroll effect
    const cloneLogos = () => {
      const logos = scrollContainer.querySelectorAll('.logo-item');
      logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        scrollContainer.appendChild(clone);
      });
    };

    cloneLogos();

    let lastTimestamp = null;

    const animate = (timestamp) => {
      if (lastTimestamp !== null) {
        const elapsed = timestamp - lastTimestamp;
        scrollPosition += scrollSpeed * elapsed;
        if (scrollPosition >= totalWidth / 2) {
          scrollPosition = 0;
        }
        scrollContainer.scrollLeft = scrollPosition;
      }
      lastTimestamp = timestamp;
      animationId = requestAnimationFrame(animate);
    };

    let animationId = requestAnimationFrame(animate);
    let isPaused = false;

    const handleMouseEnter = () => {
      isPaused = true;
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      if (isPaused) {
        isPaused = false;
        lastTimestamp = null;
        animationId = requestAnimationFrame(animate);
      }
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const logos = [
    { src: "/Company/claimcore-logo-revamp.png", alt: "ClaimCore Logo" },
    { src: "/Company/dobi.png", alt: "Dobi Logo" },
    { src: "/Company/jetclean.png", alt: "JetClean Logo" },
    { src: "/Company/manqoosh.png", alt: "Manqoosh Logo" },
    { src: "/Company/risros.png", alt: "Risros Logo" },
    { src: "/Company/nordic-logo.webp", alt: "Nordic Logo" },
    { src: "/Company/get xm.png", alt: "GET XM" },
    { src: "/Company/logo.png", alt: "Pixel Tech" },
  ];

  return (
    <section className="bg-black py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-center text-2xl md:text-3xl font-bold mb-12 uppercase tracking-wide">
          Trusted by Top Companies, Proven by Success.
        </h1>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden whitespace-nowrap mt-6 py-4"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="logo-item flex items-center justify-center mx-6 min-w-max"
            >
              <div className="w-36 h-18 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
