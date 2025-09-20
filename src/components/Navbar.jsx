import React from 'react'
import { useState, useEffect } from "react";

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
      // Use viewport center when scrolling
      updateActiveSection(window.innerHeight / 2);
    };

    const handleMouseMove = (event) => {
      // Use actual mouse position when moving
      updateActiveSection(event.clientY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    // Run once on mount (viewport center)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return activeSection;
};




const name = "< Neshwanth />"
const Navbar = () => {
  const activeSection = useActiveSection();


  return (
    <div >
      <div className="flex font-semibold shadow-md p-5 pl-60 pr-60 fixed top-0 right-0 left-0 bg-white">
        <div  className='basis-2/6 '>{name}</div>
        <div className='flex basis-4/6 px-22'>
          <div  key={1} onClick={() => scrollToSection("information")} className={`flex-1 cursor-pointer ${activeSection === "information"? "underline underline-offset-6 decoration-3 decoration-blue-700" : ""} hover:underline underline-offset-6 decoration-3`}>Home</div>
          <div  key={2} onClick={() => scrollToSection("about")} className={`flex-1 cursor-pointer ${activeSection === "about" ? "underline underline-offset-6 decoration-3 decoration-blue-700" : ""} hover:underline underline-offset-6 decoration-3`}>About</div>
          <div  key={3} onClick={() => scrollToSection("Skills")} className={`flex-1 cursor-pointer ${activeSection === "Skills" ? "underline underline-offset-6 decoration-3 decoration-blue-700" : ""} hover:underline underline-offset-6 decoration-3`}>Skills</div>
          <div  key={4} onClick={() => scrollToSection("Projects")} className={`flex-1 cursor-pointer ${activeSection === "Projects" ? "underline underline-offset-6 decoration-3 decoration-blue-700" : ""} hover:underline underline-offset-6 decoration-3`}>Projects</div>
          <div  key={5} onClick={() => scrollToSection("contactus")} className={`flex-1 cursor-pointer ${activeSection === "contactus" ? "underline underline-offset-6 decoration-3 decoration-blue-700" : ""} hover:underline underline-offset-6 decoration-3`}>Contacts</div>
        </div>
      </div>
    </div>
  )
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

export default Navbar