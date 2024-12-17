import React from 'react';
import { FaSearch } from "react-icons/fa";
import Video from '../../assets/beachVid.mp4';

const Hero = () => {
  const [activeInput, setActiveInput] = React.useState(false);
  const handleActiveInput = ({ target }) => {
    if(target.ariaLabel) {
      setActiveInput(true);
    }
    else {
      setActiveInput(false);
    }
  }
  React.useEffect(() => {
    window.addEventListener("click", handleActiveInput);
    return () => {
      window.removeEventListener("click", handleActiveInput);
    }
  }, []); // desfocar input

  return (
    <div className="w-full h-[100vh] z-10 relative">
      {/* video */}
      <video className="w-full h-full brightness-50 object-cover" loop autoPlay muted>
        <source src={Video} />
      </video>
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          {/* content */}
          <div className="flex flex-col gap-8 items-center px-5">
            <h1 className="text-3xl md:text-4xl text-white font-bold">First Class - SP, RJ, BA, SC, RS</h1>
            <h2 className="text-2xl md:text-3xl text-white font-bold">
              Top 1% Locations in Brazil
            </h2>
            <div 
              aria-label="input" 
              className="bg-white flex items-center justify-between px-1 rounded-md w-[100%] md:w-[650px]"
              style={activeInput ? { boxShadow: "0 0 30px #5651e5"} : {}}
            >
              <input
                onFocus={handleActiveInput}
                className="outline-none w-full h-full p-4 rounded-md" 
                type="text" 
                placeholder="Search Destinations"
                aria-label="input"
              />
              <div className="bg-gradient-to-r from-[#5651e5] to-[#709dff] p-3 rounded-lg cursor-pointer group">
                <FaSearch className="text-white group-hover:text-blue-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;