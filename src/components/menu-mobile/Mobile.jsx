import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const Mobile = ({ mobile, setMobile }) => {
  const style = {
    container: {
        active: "w-full h-[80vh] bg-white absolute top-0 left-0 duration-300 ease-linear ml-0",
        notActive: "w-full h-[80vh] bg-white absolute top-0 left-0 duration-300 ease-linear ml-[-100%]"
    }
  }
  return (
    <div className={mobile ? style.container.active : style.container.notActive}>
      <div className="w-full px-5 py-4 mx-auto">
        <div className="w-full flex flex-col gap-8">
            {/* logo */}
            <div className="w-full flex justify-between items-center">
                <h1 className="text-3xl text-neutral-700 font-bold cursor-pointer bg-blue-100 rounded-md">
                    BEACHES.
                </h1>
                <div>
                    <IoCloseOutline
                        onClick={() => setMobile(false)}
                        size={40} 
                        className="text-black cursor-pointer hover:text-blue-600 duration-300"
                    />
                </div>
            </div>
            {/* menu links */}
            <div className="w-full">
                <ul className="flex flex-col gap-3 w-full">
                    <li className="w-full border-b-2 border-neutral-400 py-2 text-xl">
                        <a href="#" rel="noopener noreferrer">
                            Home
                        </a>
                    </li>
                    <li className="w-full border-b-2 border-neutral-400 py-2 text-xl">
                        <a href="#" rel="noopener noreferrer">
                            Destinations
                        </a>
                    </li>
                    <li className="w-full border-b-2 border-neutral-400 py-2 text-xl">
                        <a href="#" rel="noopener noreferrer">
                            Travel
                        </a>
                    </li>
                    <li className="w-full border-b-2 border-neutral-400 py-2 text-xl">
                        <a href="#" rel="noopener noreferrer">
                            Views
                        </a>
                    </li>
                    <li className="w-full border-b-2 border-neutral-400 py-2 text-xl">
                        <a href="#" rel="noopener noreferrer">
                            Book
                        </a>
                    </li>
                </ul>
            </div>
            {/* buttons */}
            <div className="flex flex-col gap-4 mt-10">
                <button className="w-full">
                    Search
                </button>
                <button className="w-full">
                    Account
                </button>
            </div>
            {/* icons social */}
            <div className="w-full flex justify-between items-center mt-10">
                <FaFacebook size={30} className="icon" />
                <FaTwitter size={30} className="icon" />
                <FaInstagram size={30} className="icon" />
                <FaYoutube size={30} className="icon" />
                <FaWhatsapp size={30} className="icon" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Mobile;