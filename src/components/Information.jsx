import React from 'react'
import PhotoCard from './PhotoCard'

const linked = import.meta.env.VITE_LINKED

const Information = () => {
  return (
    <div className='p-5 pl-60 pr-60 flex justify-between  mt-40'>
        <div className='basis-3/5 flex flex-col gap-10'>
            <div className='font-bold text-6xl flex flex-col gap-4'>
                <div>Hi,</div>
                <div className='flex'>
                    <div>I'am</div>
                    <div className='pl-3 text-blue-500'> Neshwanth</div>
                </div>
                
                <div>Software Developer</div>
            </div>

            <div>
              <a href="https://drive.google.com/uc?export=download&id=1AKURaIJspfChn7Kfy5rRu7e2NRAwwUPD" >
                <button className='bg-blue-500 rounded-xl text-white px-6 py-2 flex justify-center items-center hover:bg-blue-700 cursor-pointer'> 
                    Resume
                    <div className='pl-2'><DOWNLOAD_LOGO/></div>
                </button>
              </a>
            </div>

            <div className='flex gap-4'>
                <div><Mail/></div>
                <div><Linkedin/></div>
                <div><Github Link={"https://github.com/neshwanthkandula"}/></div>
            </div>
        </div>
        
        <div className='basis-2/5 pl-20'>
            <PhotoCard />
        </div>
    </div>
  )
}

export default Information

function DOWNLOAD_LOGO(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>              
}

export function Linkedin() {
  return (
    <div>
      <a
        href={linked}
        className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
      >
        <svg
          xmlns="#"
          width="28"
          height="28"
          viewBox="0 0 72 72"
          fill="currentColor"
        >
          <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" />
        </svg>
      </a>
    </div>
  );
}


export function Mail() {
  return (
    <div>
      <a
        href="mailto:kandulaneshwanth@gmail.com"
        className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 72 72"
          fill="currentColor"
        >
          <path d="M11.9362 56.1235H20.4189V35.5227L8.30078 26.434V52.4881C8.30078 54.4997 9.93067 56.1235 11.9362 56.1235Z" />
          <path d="M49.5025 56.1235H57.9853C59.9969 56.1235 61.6207 54.4936 61.6207 52.4881V26.434L49.5025 35.5227" />
          <path d="M49.5025 19.7693V35.5227L61.6207 26.434V21.587C61.6207 17.0912 56.4887 14.5282 52.8956 17.2245" />
          <path d="M20.4189 35.5227V19.769L34.9607 30.6754L49.5025 19.7693V35.5227L34.9607 46.429" />
          <path d="M8.30078 21.587V26.434L20.4189 35.5227V19.769L17.0259 17.2245C13.4268 14.5282 8.30078 17.0912 8.30078 21.587Z" />
        </svg>
      </a>
    </div>
  );
}


export function Github({Link}) {
  return (
    <div>
      <a
        href={Link}
        target="_blank"
        className="p-2 rounded-lg flex items-center justify-center text-gray-900 hover:text-blue-600 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="26"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58
                0-.29-.01-1.06-.02-2.09-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.78-1.34-1.78-1.1-.75.08-.74.08-.74
                1.21.08 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.92
                0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.14 0 0 1.01-.32 3.3 1.23A11.49 11.49 0 0 1 12 5.8c1.02.01
                2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.63.24 2.84.12 3.14.77.84
                1.24 1.91 1.24 3.22 0 4.6-2.8 5.61-5.47 5.91.43.37.82 1.1.82 2.22
                0 1.6-.01 2.88-.01 3.27 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12
                c0-6.63-5.37-12-12-12z" />
        </svg>
      </a>
    </div>
  );
}
