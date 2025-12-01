import React from 'react'
import { Github } from './Information' 
import projects from '../assets/projects.js'
import { SectionWrapper } from '../App.jsx'

const PROJECTS = () => {
  return (
    <div>
        <div className='
          p-4 sm:p-5 
          pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-40 2xl:pl-60
          pr-4 sm:pr-8 md:pr-12 lg:pr-20 xl:pr-40 2xl:pr-60
          mt-20 sm:mt-28 md:mt-20 lg:mt-20 
          flex flex-col 
          gap-4 
          justify-center items-center 
        '>
            <div className='
              px-4 sm:px-5 
              font-bold 
              text-3xl sm:text-4xl lg:text-5xl 
              text-blue-500 
              underline underline-offset-10
              text-center
            '>
              Projects
            </div>
            
            <div className="
              mt-6 sm:mt-8 md:mt-10 lg:mt-12 
              w-full 
              max-w-7xl 
              mx-auto
            ">
              <div className="
                grid
                grid-cols-1                    /* Mobile: 1 column */
                md:grid-cols-2                 /* Tablet: 2 columns */
                lg:grid-cols-2                 /* Desktop: 2 columns */
                xl:grid-cols-3                 /* Large desktop: 3 columns */
                gap-6 sm:gap-8 lg:gap-10      /* Responsive gaps */
                justify-items-center          /* Center cards horizontally */
                w-full
              ">
                {projects.map((project , i)=>(
                  <div key={i} className="w-full">
                    <SectionWrapper key={i} delay={i * 0.3}>
                      <CARD project={project}/>
                    </SectionWrapper>
                  </div>
                ))}
              </div>
            </div>
        </div>
    </div>
  )
}

export default PROJECTS

function CARD({project}){
    // Truncate description for better card balance
    const truncateDescription = (text, maxLength = 120) => {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    };

    return (
      <div className='
        w-full
        max-w-sm sm:max-w-md lg:max-w-lg    
        shadow-[0_0_15px_rgba(0,0,0,0.2)] 
        p-4 sm:p-5 lg:p-6                    
        rounded-xl                         
        bg-white 
        flex flex-col 
        gap-4 sm:gap-5
        hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]
        hover:-translate-y-1                 
        transition-all duration-300 ease-out
        border border-gray-100
        group                            
        mx-auto                             
      '>
<div className='
  w-full 
  aspect-video                      
  overflow-hidden 
  rounded-lg 
  bg-gradient-to-br from-gray-100 to-gray-200 /* Gradient fallback */
  relative
'>
    <img 
      src={project.image} 
      alt={project.tittle}
      className='
        w-full 
        h-full 
        object-cover
        object-center                     /* Center the focal point */
        transition-transform duration-500 ease-out
        group-hover:scale-110             /* Slightly more zoom */
        will-change-transform             /* Performance hint */
      '
      loading="lazy"
      decoding="async"                    /* Better decoding */
    />
</div>
        
        {/* Project Details */}
        <div className='
          flex flex-col 
          gap-3 sm:gap-4 
          flex-grow                         /* Makes cards equal height */
        '>
            {/* Title */}
            <div className='
              font-bold 
              text-xl sm:text-2xl lg:text-2xl 
              text-gray-800
              text-center sm:text-left      /* Center on mobile, left on larger */
              line-clamp-1                  /* Prevent title overflow */
            '>
              {project.tittle}
            </div>
            
            {/* Tags - as badges */}
            <div className='
              flex flex-wrap 
              gap-2 
              mb-1
              justify-center sm:justify-start  /* Center on mobile, left on larger */
            '>
              {project.tags[0].split('|').map((tag, index) => (
                <span 
                  key={index}
                  className='
                    inline-block
                    px-3 py-1
                    text-xs sm:text-sm
                    font-semibold
                    bg-blue-50
                    text-blue-700
                    rounded-full
                    border border-blue-100
                    whitespace-nowrap
                  '
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
            
            {/* Description */}
            <div className='
              text-sm sm:text-base
              text-gray-600
              leading-relaxed
              text-left                     /* Keep left aligned for readability */
              line-clamp-3                  /* Limit to 3 lines */
              flex-grow                     /* Pushes buttons to bottom */
            '>
              {truncateDescription(project.discription, 150)}
            </div>
            
            {/* Project Links */}
            <div className='
              flex 
              justify-center sm:justify-start  /* Center on mobile, left on larger */
              gap-4 
              pt-3 
              border-t border-gray-100
            '>
                <Github Link={project.github}/>
                <LINK Link={project.link}/>
                
                {/* View Project Text */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    hidden sm:flex          /* Hide on mobile, show on larger screens */
                    text-sm sm:text-base
                    font-medium
                    text-blue-600
                    hover:text-blue-800
                    transition-colors
                    items-center gap-1
                    ml-auto                 /* Push to right on larger screens */
                  "
                >
                  View Project
                  <svg 
                    className="w-4 h-4"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </a>
            </div>
        </div>
    </div>
    )
}

function LINK({ Link }) {
  return (
    <div>
      <a
        href={Link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2 
          rounded-lg 
          flex items-center justify-center 
          text-gray-700
          hover:text-blue-600 
          hover:bg-blue-50
          transition-all duration-300 
          cursor-pointer
        "
      >
        <svg
          data-slot="icon"
          className="w-5 h-5 sm:w-6 sm:h-6"
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
    </div>
  );
}