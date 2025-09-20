import React from 'react'
import { Github } from './Information' 
import projects from '../assets/projects.js'
import { SectionWrapper } from '../App.jsx'

const PROJECTS = () => {
  return (
    <div>
        <div className='p-5 pl-60 pr-60 mt-40 flex flex-col gap-4 justify-center items-center '>
            <div className='px-5 font-bold text-4xl text-blue-500 underline underline-offset-10 '>
              Projects
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8">
              {projects.map((project , i)=>(
                <div key={i}>
                  <SectionWrapper key={i} delay={i * 0.3}>
                    <CARD project={project}/>
                  </SectionWrapper>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default PROJECTS

function CARD({project}){
    return <div className=' w-122 shadow-[0_0_15px_rgba(0,0,0,0.2)] p-10 rounded-lg bg-white flex flex-col gap-4'>
        <div className=''>
            <img src={project.image} alt="project screenshot" className='<img
  src={project.image}
  alt="project screenshot"
  className="rounded-lg transition-all duration-700 ease-in-out 
             hover:scale-105 hover:shadow-2xl hover:opacity-100'/>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='font-bold text-3xl'>{project.tittle}</div>
            <div className='font-bold'>{project.tags}</div>
            <div className='text-left'>{project.discription}</div>
            <div className='flex'>
                <Github Link={project.github}/>
                <LINK Link={project.link}/>
            </div>
        </div>
    </div>
}


function LINK({ Link }) {
  console.log(Link)
  return (
    
    <div>
      <a
        href={Link}
        target="_blank"
        className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
      >
        <svg
          data-slot="icon"
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
    </div>
  );
}
