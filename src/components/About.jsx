import React from 'react'

const About = () => {
  return (
    <div className='
      p-5 
      pl-4 sm:pl-8 md:pl-16 lg:pl-32 xl:pl-60
      pr-4 sm:pr-8 md:pr-16 lg:pr-32 xl:pr-60
      mt-20 
      flex flex-col 
      gap-4 
      justify-center items-center 
    '>
      {/* Your exact header styling */}
      <div className='
        px-5 
        font-bold 
        text-4xl 
        text-blue-500 
        underline underline-offset-10
      '>
        About
      </div>
      
      {/* Card with your original text sizes */}
      <div className='
        mt-10 
        w-full 
        max-w-3xl
      '>
        <div className='
          flex flex-col 
          gap-6 
          justify-center items-center
          p-6 sm:p-8
          bg-white
          rounded-lg
          shadow-[0_0_15px_rgba(0,0,0,0.1)]
          border border-gray-100
        '>
          {/* Your original name styling */}
          <div className='
            font-bold 
            text-2xl 
            pt-4
          '>
            I'm kandula Neshwanth
          </div>
          
          {/* Your original paragraph with card padding */}
          <div className='
            flex justify-center text-center
            px-4 sm:px-6 md:px-8
          '>
            <div className='
              text-base                     /* Your original size */
              text-gray-600
              text-center
              leading-relaxed
            '>
              A recent graduate with a strong foundation in backend technologies including Node.js, Express.js, and MongoDB. 
              Proficient in frontend technologies such as HTML, CSS, JavaScript, React Js and Next Js. 
              Passionate about building scalable and secure web applications. 
              A detail-oriented and collaborative team player committed to continuous learning and growth. 
              Excited to contribute to the success of the organization.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About