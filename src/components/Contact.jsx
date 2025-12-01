import React from 'react'
import { Mail, Linkedin, Github } from './Information'

const ContactUs = () => {
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
          text-3xl sm:text-4xl 
          text-blue-500 
          underline underline-offset-8 sm:underline-offset-10
        '>
          Contact
        </div>
        
        <div className='mt-6 sm:mt-8 md:mt-10 w-full max-w-2xl'>
          <div className='
            flex flex-col 
            gap-4 sm:gap-6 
            justify-center items-start
            p-4 sm:p-6
            bg-white
            rounded-xl
            shadow-[0_0_15px_rgba(0,0,0,0.1)]
          '>
            {/* Email */}
            <div className='flex items-center w-full'>
              <div className='flex-shrink-0'>
                <Mail />
              </div>
              <div className='ml-4 w-full'>
                <a
                  href="mailto:kandulaneshwanth@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 
                    rounded-lg 
                    flex items-center 
                    text-gray-900 
                    hover:text-blue-600 
                    transition-colors duration-300
                    w-full
                    text-base sm:text-lg md:text-xl
                    break-all                    /* Allow email to break */
                  "
                >
                  kandulaneshwanth@gmail.com
                </a>
              </div>
            </div>
            
            {/* LinkedIn */}
            <div className='flex items-center w-full'>
              <div className='flex-shrink-0'>
                <Linkedin />
              </div>
              <div className='ml-4 w-full'>
                <a
                  href="https://www.linkedin.com/in/neshwanthkandula/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 
                    rounded-lg 
                    flex items-center 
                    text-gray-900 
                    hover:text-blue-600 
                    transition-colors duration-300
                    w-full
                    text-base sm:text-lg md:text-xl
                    truncate                     /* Truncate long URLs */
                  "
                  title="linkedin.com/in/neshwanthkandula/"  /* Show full on hover */
                >
                  linkedin.com/in/neshwanthkandula/
                </a>
              </div>
            </div>
            
            {/* GitHub */}
            <div className='flex items-center w-full'>
              <div className='flex-shrink-0'>
                <Github Link={"#"} />
              </div>
              <div className='ml-4 w-full'>
                <a
                  href="https://github.com/neshwanthkandula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    p-2 
                    rounded-lg 
                    flex items-center 
                    text-gray-900 
                    hover:text-blue-600 
                    transition-colors duration-300
                    w-full
                    text-base sm:text-lg md:text-xl
                    truncate
                  "
                  title="github.com/neshwanthkandula"
                >
                  github.com/neshwanthkandula
                </a>
              </div>
            </div>
            
            {/* Phone */}
            <div className='flex items-center w-full'>
              <div className='flex-shrink-0'>
                <Phone />
              </div>
              <div className='ml-4 w-full'>
                <a
                  href="tel:+916302288787"
                  className="
                    p-2 
                    rounded-lg 
                    flex items-center 
                    text-gray-900 
                    hover:text-blue-600 
                    transition-colors duration-300
                    w-full
                    text-base sm:text-lg md:text-xl
                    font-mono                     /* Monospace for phone numbers */
                  "
                >
                  +91 6302288787
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs

function Phone(){
  return (
    <div>
      <a
        href="tel:+916302288787"
        className="
          p-2 
          rounded-lg 
          flex items-center justify-center 
          text-gray-900 
          hover:text-blue-600 
          transition-colors duration-300
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58.11.33.03.7-.24 1.01l-2.2 2.2z"/>
        </svg>
      </a>
    </div>
  )
}