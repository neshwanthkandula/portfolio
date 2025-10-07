import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // install: npm i lucide-react

// Hook
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = (yPos) => {
      const sections = document.querySelectorAll("section");
      let current = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (yPos >= rect.top && yPos <= rect.bottom) {
          current = section.id;
        }
      });

      setActiveSection((prev) => (prev !== current ? current : prev));
    };

    const handleScroll = () => {
      updateActiveSection(window.innerHeight / 2); // center of viewport
    };

    const handleMouseMove = (event) => {
      updateActiveSection(event.clientY); // mouse position
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll(); // run once

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return activeSection;
};

// Main Navbar
const name = "< Neshwanth />";
const Navbar = () => {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 1, label: "Home", section: "information" },
    { key: 2, label: "About", section: "about" },
    { key: 3, label: "Skills", section: "Skills" },
    { key: 4, label: "Projects", section: "Projects" },
    { key: 5, label: "Contacts", section: "contactus" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center font-semibold px-4 sm:px-10 md:px-20 lg:px-40 py-4">
        {/* Logo */}
        <div className="text-lg sm:text-xl">{name}</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <div
              key={item.key}
              onClick={() => scrollToSection(item.section)}
              className={`cursor-pointer ${
                activeSection === item.section
                  ? "underline underline-offset-4 decoration-2 decoration-blue-700"
                  : "hover:underline underline-offset-4 decoration-2"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 cursor-pointer" /> : <Menu className="w-6 h-6 cursor-pointer" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-inner cursor-pointer">
          {navItems.map((item) => (
            <div
              key={item.key}
              onClick={() => {
                scrollToSection(item.section);
                setIsOpen(false);
              }}
              className={`cursor-pointer ${
                activeSection === item.section
                  ? "underline underline-offset-4 decoration-2 decoration-blue-700"
                  : "hover:underline underline-offset-4 decoration-2"
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

export default Navbar;
