import React from 'react'
import SkillCard from "../components/SkillCard"

const Skills = () => {
  return (
    <div className='
      p-4 sm:p-5 
      pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-60
      pr-4 sm:pr-8 md:pr-16 lg:pr-32 xl:pr-60
      mt-10 sm:mt-14 md:mt-14 lg:mt-14 
      flex flex-col 
      gap-4 
      justify-center items-center 
    '>
      {/* Your exact header styling */}
      <div className='
        px-5 
        font-bold 
        text-3xl sm:text-4xl 
        text-blue-500 
        underline underline-offset-10
      '>
        Skills
      </div>
      
      <div className='mt-6 sm:mt-8 md:mt-10 w-full'>
        <SkillCard/>
      </div>
    </div>
  )
}

export default Skills