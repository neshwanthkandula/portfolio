import React from "react";
import { Github } from "./Information";
import projects from "../assets/projects.js";
import { SectionWrapper } from "../App.jsx";

const PROJECTS = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 mt-32 flex flex-col gap-6 items-center">
      {/* Title */}
      <div className="font-bold text-3xl sm:text-4xl text-blue-500 underline underline-offset-8">
        Projects
      </div>

      {/* Projects Grid */}
      <div className="mt-10 w-full flex flex-wrap justify-center gap-6">
        {projects.map((project, i) => (
          <SectionWrapper key={i} delay={i * 0.3}>
            <CARD project={project} />
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
};

export default PROJECTS;

// ========== CARD COMPONENT ==========
function CARD({ project }) {
  return (
    <div className="w-full sm:w-[300px] md:w-[350px] lg:w-[475px] shadow-[0_0_15px_rgba(0,0,0,0.2)] p-6 md:p-8 rounded-lg bg-white flex flex-col gap-4 hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] transition duration-300">
      
      {/* Project Image */}
      <div>
        <img
          src={project.image}
          alt="project screenshot"
          className="rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 hover:shadow-2xl"
        />
      </div>

      {/* Project Details */}
      <div className="flex flex-col gap-3">
        <div className="font-bold text-xl sm:text-2xl md:text-3xl">{project.tittle}</div>
        <div className="text-blue-600 font-medium">{project.tags}</div>
        <div className="text-gray-900 text-sm sm:text-base">{project.discription}</div>
        <div className="flex gap-4 mt-2">
          <Github Link={project.github} />
          <LINK Link={project.link} />
        </div>
      </div>
    </div>
  );
}

// ========== LINK ICON ==========
function LINK({ Link }) {
  return (
    <a
      href={Link}
      target="_blank"
      rel="noreferrer"
      className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
    >
      <svg
        width="28"
        height="26"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 
               1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
        />
      </svg>
    </a>
  );
}
