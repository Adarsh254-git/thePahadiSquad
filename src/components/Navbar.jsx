import React, { useState, useEffect } from "react";
import logo from "../assets/phadisquad.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "expeditions", "plans", "rentals", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", id: "home" },
    { name: "Expeditions", href: "#expeditions", id: "expeditions" },
    { name: "Plans", href: "#plans", id: "plans" },
    { name: "Rentals", href: "#rentals", id: "rentals" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white shadow-md sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <a href="/" className="flex items-center gap-3 group">
              <img
                src={logo}
                alt="ThePhadiSquad Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col justify-center leading-tight">
                <span className="text-lg font-bold tracking-tight text-white">
                  ThePahadi
                </span>
                <span className="text-md font-bold tracking-tight text-orange-500 -mt-1">
                  Squad
                </span>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === link.id
                    ? "text-orange-500"
                    : "hover:text-orange-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 text-orange-600 focus:outline-none"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ${isOpen ? "rotate-45" : "-translate-y-2"}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ${isOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block absolute h-0.5 w-6 bg-current transform transition duration-500 ${isOpen ? "-rotate-45" : "translate-y-2"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-black/95 border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                setActiveSection(link.id);
              }}
              className={`block px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-orange-500 bg-white/5"
                  : "text-white hover:text-orange-500"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
