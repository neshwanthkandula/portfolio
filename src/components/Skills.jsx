import React from 'react'
import SkillCard from "../components/SkillCard"
const Skills = () => {
  return (
    <div className='p-5 pl-60 pr-60 mt-40 flex flex-col gap-4 justify-center items-center '>
        <div className='px-5 font-bold text-4xl text-blue-500 underline underline-offset-10 '>Skills</div>
        <div className='mt-10'>
          <SkillCard/>
        </div>
    </div>
  )
}

export default Skills