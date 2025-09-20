import React from 'react'
import data from '../assets/skills.js'
import { SectionWrapper } from '../App.jsx'

export const SkillCard = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {data.map((e, i) => (
          <div key={i}>
            <SectionWrapper key={i} delay={i * 0.3}>
              <CARD image={e.image} tittle={e.name} />
            </SectionWrapper>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillCard

function CARD({image, tittle}){
  return <div className="flex gap-2 px-40 py-5 bg-white rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.2)] items-center">
    <div  className="w-7 h-7 text-blue-600"><img src={image} alt="logo"/></div>
    <div className='font-semibold'>{tittle}</div>
  </div>
}


