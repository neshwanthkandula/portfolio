import React from 'react'
import SkillCard from "../components/SkillCard"

const Skills = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 mt-32 flex flex-col gap-6 justify-center items-center">
      
      {/* Heading */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-500 underline underline-offset-8">
        Skills
      </div>

      {/* Skills Cards */}
      <div className="mt-8 w-full flex justify-center">
        <SkillCard />
      </div>
    </div>
  )
}

export default Skills
