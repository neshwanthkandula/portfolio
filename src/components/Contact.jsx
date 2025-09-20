import React from 'react'
import { Mail, Linkedin , Github } from './Information'
const ContactUs = () => {
  return (
    <div >
        <div className='p-5 pl-60 pr-60 mt-40 flex flex-col gap-4 justify-center items-center '>
            <div className='px-5 font-bold text-4xl text-blue-500 underline underline-offset-10 '>Contact</div>
            <div className='mt-10 grid grid-cols-1'>
                <div className='flex flex-col gap-4  justify-center items-start'>
                    <div className='flex text-2xl items-center'>
                        <div><Mail/></div>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
                            >neshwanthneshukandula648@gmail.com</a>
                        </div>
                    </div>
                    <div className='flex text-2xl items-center'>
                        <div><Linkedin /></div>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
                            >LinkedIn</a>
                        </div>
                    </div>
                    <div className='flex text-2xl items-center'>
                        <div><Github Link={"#"}/></div>
                        <div>
                            <a
                                href="#"
                                target="_blank"
                                className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
                            >Github.com</a>
                        </div>
                    </div>
                    <div className='flex text-2xl items-center'>
                        <div><Phone/></div>
                        <div>+91 6302288787</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs

function Phone(){
    return <div>
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
</div>
}
