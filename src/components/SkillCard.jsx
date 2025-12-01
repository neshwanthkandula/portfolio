import React from 'react'
import data from '../assets/skills.js'
import { SectionWrapper } from '../App.jsx'

export const SkillCard = () => {
  return (
    <div className="w-full">
      <div className="
        grid
        grid-cols-1                   /* Mobile: 1 column */
        sm:grid-cols-1                /* Small screens: 1 column */
        md:grid-cols-2                /* Medium screens: 2 columns */
        lg:grid-cols-2                /* Large screens: 2 columns */
        gap-4 sm:gap-5 md:gap-6      /* Responsive gaps */
        justify-items-center         
        w-full
      ">
        {data.map((e, i) => (
          <div key={i} className="w-full">
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
  return (
    <div className="
      flex 
      items-center
      px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-40 
      py-4 sm:py-5 
      bg-white 
      rounded-lg 
      shadow-[0_0_15px_rgba(0,0,0,0.2)]
      w-full
      max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl
      mx-auto
    ">
      {/* Image with minimal spacing */}
      <div className="w-7 h-7 text-blue-600 mr-2 flex-shrink-0">
        <img src={image} alt="logo" className="w-full h-full" />
      </div>
      
      {/* Text takes remaining space */}
      <div className='font-semibold text-sm sm:text-base md:text-lg text-center flex-grow'>
        {tittle}
      </div>
    </div>
  )
}