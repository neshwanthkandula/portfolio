import React from 'react'
import { Mail, Linkedin , Github } from './Information'

const ContactUs = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 mt-32 flex flex-col gap-6 items-center">
      <div className="font-bold text-4xl sm:text-4xl text-blue-500 underline underline-offset-8">
        Contact
      </div>
      <div className="mt-8 grid grid-cols-1">
        <div className="flex flex-col text-4xl justify-center items-start gap-6">
          <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2 sm:gap-4 sm:text-lg">
            <Mail />
            <a
              href="mailto:neshwanthneshukandula648@gmail.com"
              className="text-gray-900 mt-1.5 text-2xl hover:text-blue-600 transition-colors duration-300 break-all"
            >
              neshwanthkandula@gmail.com
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-base sm:text-lg">
            <Linkedin  />
            <a
              href="https://www.linkedin.com/in/neshwanthkandula"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 mt-1.5 text-2xl hover:text-blue-600 transition-colors duration-300"
            >
              linkedin.com/in/neshwanthkandula/
            </a>
          </div>

          {/* Github */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-base sm:text-lg">
            <Github Link="https://github.com/neshwanthkandula" />
            <a
              href="https://github.com/neshwanthkandula"
              target="_blank"
              rel="noreferrer"
              className="text-gray-900 mt-1.5 text-2xl hover:text-blue-600 transition-colors duration-300"
            >
              github.com/neshwanthkandula
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-base sm:text-lg mb-20">
            <Phone />
            <span className='mt-1.5 text-2xl'>+91 6302288787</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactUs

// ====== Phone Icon ======
function Phone(){
  return (
    <a
      href="tel:+916302288787"
      className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.62 10.79a15.054 15.054 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58.11.33.03.7-.24 1.01l-2.2 2.2z"/>
      </svg>
    </a>
  )
}
