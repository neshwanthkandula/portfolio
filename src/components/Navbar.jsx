import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const name = "< Neshwanth />"

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
      updateActiveSection(window.innerHeight / 2);
    };

    const handleMouseMove = (event) => {
      updateActiveSection(event.clientY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return activeSection;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  const navItems = [
    { id: "information", label: "Home" },
    { id: "about", label: "About" },
    { id: "Skills", label: "Skills" },
    { id: "Projects", label: "Projects" },
    { id: "contactus", label: "Contacts" }
  ]

  return (
    <div className="relative z-50">
      {/* Desktop Navbar - for large screens */}
      <div className="
        hidden
        xl:flex
        font-semibold 
        shadow-md 
        p-5 
        pl-60 
        pr-60 
        fixed 
        top-0 
        right-0 
        left-0 
        bg-white
        z-50
      ">
        <div className='basis-2/6'>{name}</div>
        <div className='flex basis-4/6 px-22'>
          {navItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                flex-1 
                cursor-pointer 
                ${activeSection === item.id ? 
                  "underline underline-offset-6 decoration-3 decoration-blue-700" : 
                  ""} 
                hover:underline underline-offset-6 decoration-3
              `}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Navbar - for medium screens */}
      <div className="
        hidden
        md:flex
        lg:flex
        xl:hidden
        font-semibold 
        shadow-md 
        p-4 
        px-8
        md:px-16
        lg:px-24
        fixed 
        top-0 
        right-0 
        left-0 
        bg-white
        z-50
      ">
        <div className='basis-2/6 text-lg md:text-xl'>{name}</div>
        <div className='flex basis-4/6 gap-4 md:gap-6 lg:gap-8'>
          {navItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`
                cursor-pointer 
                text-sm md:text-base lg:text-lg
                ${activeSection === item.id ? 
                  "underline underline-offset-4 md:underline-offset-6 decoration-2 md:decoration-3 decoration-blue-700" : 
                  ""} 
                hover:underline underline-offset-4 md:underline-offset-6 decoration-2 md:decoration-3
                whitespace-nowrap
              `}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navbar - for small screens */}
      <div className="
        md:hidden
        flex
        items-center
        justify-between
        font-semibold
        shadow-md
        p-4
        fixed
        top-0
        right-0
        left-0
        bg-white
        z-50
      ">
        <div className="text-lg">{name}</div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            p-2
            rounded-md
            hover:bg-gray-100
            transition-colors
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="
            fixed
            inset-0
            top-16
            bg-white
            z-40
            animate-in
            fade-in
            duration-200
          ">
            <div className="
              flex
              flex-col
              items-center
              justify-center
              h-full
              space-y-6
              p-6
            ">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setIsMenuOpen(false)
                  }}
                  className={`
                    text-xl
                    font-semibold
                    w-full
                    py-3
                    rounded-lg
                    transition-all
                    ${activeSection === item.id ? 
                      "bg-blue-50 text-blue-700" : 
                      "text-gray-700 hover:bg-gray-50"}
                  `}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 md:h-20" />
    </div>
  )
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    // Adjust scroll position to account for fixed navbar height
    const navbarHeight = window.innerWidth >= 1280 ? 80 : 64; // xl: 80px, others: 64px
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export default Navbar