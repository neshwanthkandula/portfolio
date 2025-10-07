import React from 'react'
import data from '../assets/skills.js'
import { SectionWrapper } from '../App.jsx'

export const SkillCard = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((e, i) => (
          <SectionWrapper key={i} delay={i * 0.3}>
            <CARD image={e.image} title={e.name} />
          </SectionWrapper>
        ))}
      </div>
    </div>
  )
}

export default SkillCard

function CARD({ image, title }) {
  return (
    <div className="flex gap-3 px-4 sm:px-6 md:px-8 py-4 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.15)] items-center hover:shadow-[0_0_20px_rgba(0,0,0,0.25)] transition duration-300">
      <div className="w-8 h-8 flex-shrink-0">
        <img src={image} alt="logo" className="w-full h-full object-contain" />
      </div>
      <div className="font-medium text-gray-800 text-sm sm:text-base md:text-lg">
        {title}
      </div>
    </div>
  )
}
