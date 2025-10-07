import React from 'react'

const About = () => {
  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 mt-20 flex flex-col gap-6 items-center text-center">
      {/* Title */}
      <div className="font-bold text-3xl sm:text-4xl text-blue-500 underline underline-offset-8">
        About
      </div>

      {/* Subtitle */}
      <div className="font-semibold text-xl sm:text-2xl pt-4">
        I'm Kandula Neshwanth
      </div>

      {/* Description */}
      <div className="max-w-4xl text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
        A recent graduate with a strong foundation in backend technologies including 
        <span className="font-medium text-blue-600"> Node.js, Express.js, and MongoDB</span>. 
        Proficient in frontend technologies such as 
        <span className="font-medium text-blue-600"> HTML, CSS, JavaScript, React.js, and Next.js</span>. 
        Passionate about building scalable and secure web applications. 
        A detail-oriented and collaborative team player committed to continuous learning and growth. 
        Excited to contribute to the success of the organization.
      </div>
    </div>
  )
}

export default About
