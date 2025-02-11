import { useState, useEffect } from "react";
import logo from "../assets/android-chrome-512x512.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Scroll Spy: use IntersectionObserver to update activeLink when sections are in view.
  useEffect(() => {
    const sectionIds = ["Home", "portfolio", "services", "testimonials"];
    const observers = [];

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // When a section is at least 50% visible, update activeLink.
              if (entry.isIntersecting) {
                setActiveLink(id);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(section);
        observers.push(observer);
      }
    });

    // Cleanup: disconnect observers when component unmounts.
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Component for the active green dot (with your box-shadow)
  const ActiveDot = () => (
    <span
      style={{ boxShadow: "0 0 0.45em #00ff19" }}
      className="inline-block w-2 h-2 bg-green-500 rounded-full ml-1"
    ></span>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 bg-black/50 backdrop-blur-md text-white px-20">
      {/* Logo */}
      <a
        href="#"
        className="text-xl font-bold hover:scale-105 transition-transform"
      >
        <img src={logo} alt="Logo" className="h-14 brightness-0 invert" />
      </a>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-grow justify-center space-x-6">
        <a
          href="#Home"
          onClick={() => setActiveLink("Home")}
          className="hover:text-gray-300 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Home {activeLink === "Home" && <ActiveDot />}
        </a>
        <a
          href="#portfolio"
          onClick={() => setActiveLink("portfolio")}
          className="hover:text-gray-300 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Portfolio {activeLink === "portfolio" && <ActiveDot />}
        </a>
        <a
          href="#services"
          onClick={() => setActiveLink("services")}
          className="hover:text-gray-300 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Services {activeLink === "services" && <ActiveDot />}
        </a>
        <a
          href="#testimonials"
          onClick={() => setActiveLink("testimonials")}
          className="hover:text-gray-300 transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          Testimonials {activeLink === "testimonials" && <ActiveDot />}
        </a>
      </div>

      {/* Hire Us Button - Desktop */}
      <button className="hidden md:block bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
        Hire Us
      </button>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
      >
        <div className="w-6 h-6 relative">
          <div
            className={`absolute h-[2px] w-full bg-white rounded transition-all duration-300 ${
              isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
            }`}
          />
          <div
            className={`absolute h-[2px] top-1/2 -translate-y-1/2 w-full bg-white rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`absolute h-[2px] w-full bg-white rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-16 left-0 right-0 bg-black/50 backdrop-blur-md overflow-y-auto transition-all duration-300 ease-in-out z-50 ${
          isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center p-4 space-y-6">
        <a
            href="#Home"
            onClick={() => {
              setIsOpen(false);
              setActiveLink("Home");
            }}
            className="hover:text-gray-300 transition-colors duration-300 text-lg"
          >
            Home {activeLink === "Home" && <ActiveDot />}
          </a>
          <a
            href="#portfolio"
            onClick={() => {
              setIsOpen(false);
              setActiveLink("portfolio");
            }}
            className="hover:text-gray-300 transition-colors duration-300 text-lg"
          >
            Portfolio {activeLink === "portfolio" && <ActiveDot />}
          </a>
          <a
            href="#services"
            onClick={() => {
              setIsOpen(false);
              setActiveLink("services");
            }}
            className="hover:text-gray-300 transition-colors duration-300 text-lg"
          >
            Services {activeLink === "services" && <ActiveDot />}
          </a>
          <a
            href="#testimonials"
            onClick={() => {
              setIsOpen(false);
              setActiveLink("testimonials");
            }}
            className="hover:text-gray-300 transition-colors duration-300 text-lg"
          >
            Testimonials {activeLink === "testimonials" && <ActiveDot />}
          </a>
          <button className="bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-full transition-all duration-300 w-full max-w-[200px]">
            Hire Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
