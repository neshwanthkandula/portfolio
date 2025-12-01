import React from "react";
import PhotoCard from "./PhotoCard";

const Information = () => {
  return (
    <section
      id="information"
      className="
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 
        pt-12 sm:pt-16 md:pt-10 lg:pt-12
        flex flex-col md:flex-row 
        items-center justify-between 
        gap-6 md:gap-8 lg:gap-10
        max-w-6xl mx-auto
        min-h-[80vh] md:min-h-[85vh]
      "
    >
      {/* Card Container */}
      <div className="
        w-full
        bg-white
        rounded-2xl
        shadow-[0_0_25px_rgba(0,0,0,0.08)]
        border border-gray-100
        p-5 sm:p-6 md:p-8 lg:p-10
        flex flex-col md:flex-row
        gap-6 md:gap-8 lg:gap-10
        items-center
        hover:shadow-[0_0_35px_rgba(0,0,0,0.12)]
        transition-shadow duration-300
      ">
        {/* Left Text Section */}
        <div className="
          flex flex-col 
          gap-5 md:gap-6 
          w-full md:w-1/2 lg:w-3/5 
          text-center md:text-left
          order-2 md:order-1
        ">
        <div className="
            font-bold 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            flex flex-col 
            gap-1 md:gap-2
          ">
            <div className="text-gray-800">Hi,</div>

            <div className="flex justify-center md:justify-start">
              <span className="text-gray-800">I'm</span>
              <span className="pl-2 md:pl-3 text-blue-600">Neshwanth</span>
            </div>

            <div className="text-gray-800">Software Developer</div>
          </div>

          {/* Description */}
          <p className="
            text-gray-600 
            text-sm sm:text-base md:text-lg 
            max-w-md 
            mx-auto md:mx-0
            font-medium
            mt-1
          ">
            Crafting digital experiences with modern web technologies. 
            Passionate about building scalable and innovative solutions.
          </p>

          {/* Resume Button Card */}
          <div className="
            flex justify-center md:justify-start
            mt-3 md:mt-4
          ">
            <div className="
              bg-gradient-to-r from-blue-50 to-blue-100
              rounded-xl
              p-3 sm:p-4
              border border-blue-200
              inline-block
              hover:from-blue-100 hover:to-blue-200
              transition-all duration-300
            ">
              <a
                href="https://drive.google.com/uc?export=download&id=1AKURaIJspfChn7Kfy5rRu7e2NRAwwUPD"
                className="inline-block"
              >
                <button className="
                  bg-blue-600 
                  rounded-xl 
                  text-white 
                  px-5 py-3 sm:px-6 sm:py-3
                  flex items-center 
                  hover:bg-blue-700 
                  active:bg-blue-800
                  transition-all duration-300 
                  font-semibold
                  text-sm sm:text-base
                  hover:scale-105
                  active:scale-95
                  shadow-md hover:shadow-lg
                ">
                  Download Resume
                  <span className="pl-2 sm:pl-3">
                    <DOWNLOAD_LOGO />
                  </span>
                </button>
              </a>
              <p className="
                text-xs text-gray-500 
                mt-1 sm:mt-2 text-center md:text-left
              ">
                PDF • 2 MB • Updated recently
              </p>
            </div>
          </div>

          {/* Social Icons Card - Reduced Width */}
          {/* Social Icons Card - Matching Resume Button Width */}
        <div className="
          bg-gradient-to-r from-gray-50 to-gray-100
          rounded-xl
          p-3 sm:p-4
          border border-gray-200
          mt-3 md:mt-4
          hover:from-gray-100 hover:to-gray-200
          transition-all duration-300
          w-full                    
          max-w-md                   
          mx-auto md:mx-0           
        ">
          <p className="
            text-gray-700 
            text-sm sm:text-base     /* Match resume text size */
            font-medium
            mb-3 text-center         /* Slightly more margin to match resume */
          ">
            Connect with me
          </p>
          <div className="
            flex gap-3 sm:gap-4      /* Match resume button spacing */
            items-center 
            justify-center           /* Always center icons */
          ">
            <Mail />
            <Linkedin />
            <Github Link={"https://github.com/neshwanthkandula"} />
          </div>
        </div>
        </div>

        {/* Right Image - Inside Card */}
        <div className="
          w-full md:w-1/2 lg:w-2/5 
          flex justify-center items-center
          order-1 md:order-2
        ">
          <div className="
            relative
            w-[250px] h-[250px]      
            sm:w-[280px] sm:h-[280px] 
            md:w-[260px] md:h-[260px] 
            lg:w-[300px] lg:h-[300px] 
            xl:w-[320px] xl:h-[320px] 
            flex-shrink-0
            bg-gradient-to-br from-blue-50 to-gray-100
            rounded-2xl
            p-3 sm:p-4
            border border-gray-200
            shadow-inner
            overflow-hidden
            group
          ">
            <div className="
              absolute inset-0
              bg-gradient-to-tr from-blue-100/20 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-500
            " />
            <PhotoCard className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;

function DOWNLOAD_LOGO(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>              
}

export function Linkedin() {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/neshwanthkandula/"
        className="
          p-1.5 sm:p-2 
          rounded-lg 
          flex items-center justify-center 
          text-gray-700
          hover:text-blue-600 
          hover:bg-blue-50
          transition-all duration-300
        "
      >
        <svg
          xmlns="#"
          className="w-5 h-5 sm:w-6 sm:h-6"
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
        className="
          p-1.5 sm:p-2 
          rounded-lg 
          flex items-center justify-center 
          text-gray-700
          hover:text-blue-600 
          hover:bg-blue-50
          transition-all duration-300
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
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
        rel="noopener noreferrer"
        className="
          p-1.5 sm:p-2 
          rounded-lg 
          flex items-center justify-center 
          text-gray-700
          hover:text-blue-600 
          hover:bg-blue-50
          transition-all duration-300
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6"
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