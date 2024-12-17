import React from 'react';
import { FaFacebook, FaInstagram, FaRegCopyright, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const getFullYear = () => {
    const date = new Date().getFullYear();
    return date;
  }
  return (
    <footer className="w-full py-20 bg-slate-200 mt-16 relative">
      <div className="w-full max-w-[1400px] mx-auto px-5">
        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row justify-between md:items-center gap-8 md:gap-0">
            <h1 className="text-4xl font-bold text-slate-800">
              BEACHES.
            </h1>
            <ul className="flex items-center gap-4 md:gap-8">
              <li className="text-[#5651e5] text-2xl md:text-3xl hover:scale-125 duration-500 ease-linear cursor-pointer">
                <FaFacebook />
              </li>
              <li className="text-[#5651e5] text-2xl md:text-3xl hover:scale-125 duration-500 ease-linear cursor-pointer">
                <FaInstagram />
              </li>
              <li className="text-[#5651e5] text-2xl md:text-3xl hover:scale-125 duration-500 ease-linear cursor-pointer">
                <FaWhatsapp />
              </li>
              <li className="text-[#5651e5] text-2xl md:text-3xl hover:scale-125 duration-500 ease-linear cursor-pointer">
                <FaYoutube />
              </li>
            </ul>
          </div>
          <div className="w-full flex items-center justify-between mt-14 gap-6">
            <div>
              <ul className="w-full flex flex-col md:flex-row md:items-center gap-4">
                <li className="cursor-pointer hover:opacity-50 duration-200">About</li>
                <li className="cursor-pointer hover:opacity-50 duration-200">Partners</li>
                <li className="cursor-pointer hover:opacity-50 duration-200">Careers</li>
                <li className="cursor-pointer hover:opacity-50 duration-200">Newsroom</li>
                <li className="cursor-pointer hover:opacity-50 duration-200">Advertising</li>
              </ul>
            </div>
            <div>
              <ul className="w-full flex flex-col md:flex-row md:items-center gap-4">
                <li className="cursor-pointer hover:opacity-50 duration-200">Home</li>
                <li className="cursor-pointer hover:opacity-50 duration-200">Destinations</li>
                <li className="cursor-pointer hover:opacity-50 duration-200">Travel</li>
                <li className="cursor-pointer hover:opacity-50 duration-200">Views</li>
                <li className="p-2 bg-[#5651e5] text-white rounded-xl css-shadow-blue cursor-pointer duration-200">
                  Book         
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-t from-[#5651e5] to-blue-500 mt-10 p-3 absolute bottom-0 left-0">
            <p className="flex justify-center items-center gap-2 text-white">
              <FaRegCopyright />
              {getFullYear()} Travel, Inc
            </p>
          </div>
    </footer>
  )
}

export default Footer;