import React from 'react'

const Footer = () => {
  return (
    <div className="bg-[#190022] mt-20 sm:mt-24 md:mt-30">
        <div className='p-4 sm:p-5 md:p-6 lg:p-7 flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center'>
              Neshwanth Kandula
            </div>
            <div className='text-sm sm:text-base md:text-lg font-semibold text-white'>
              © Neshwanth. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer