import React from 'react';
import { FaSearch, FaUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import Mobile from '../menu-mobile/Mobile';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);

  return (
    <header className="w-full absolute z-[50]">
      <nav className="w-full max-w-[1400px] px-5 py-4 mx-auto">
        <div className="w-full flex justify-between items-center">
            {/* logo */}
            <div>
                <h1 className="text-3xl text-white font-bold cursor-pointer">
                    BEACHES.
                </h1>
            </div>
            {/* menu */}
            <div className="hidden md:block">
                <ul className="text-white flex items-center gap-8">
                    <li>
                        <a className="a-desktop" href="#" rel="noopener noreferrer">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="a-desktop" href="#" rel="noopener noreferrer">
                            Destinations
                        </a>
                    </li>
                    <li>
                        <a className="a-desktop" href="#" rel="noopener noreferrer">
                            Travel
                        </a>
                    </li>
                    <li>
                        <a className="a-desktop" href="#" rel="noopener noreferrer">
                            Views
                        </a>
                    </li>
                    <li>
                        <button className="css-shadow px-6 py-2  bg-white rounded-[50px] text-white hover:opacity-90 duration-300
                        css-shadow-blue">
                            Book
                        </button>
                    </li>
                </ul>
            </div>
            {/* icons */}
            <div className="hidden md:flex items-center gap-8">
                <div className="p-3 rounded-full bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer hover:bg-white duration-200 group
                hover:scale-[1.1]">
                    <FaSearch 
                        className="text-white duration-200 group-hover:text-blue-300" 
                        size={20} 
                    />
                </div>
                <div className="p-3 rounded-full bg-gradient-to-r from-[#5651e5] to-[#709dff] cursor-pointer hover:bg-white duration-200 group
                hover:scale-[1.1]">
                    <FaUser 
                        className="text-white duration-200 group-hover:text-blue-300" 
                        size={20}
                    />
                </div>
            </div>
            {/* icon-menu */}
            <div className="md:hidden">
                <MdMenu
                    onClick={() => setMobile(true)}
                    size={40} 
                    className="text-white cursor-pointer hover:text-blue-500 duration-300"
                />
            </div>
        </div>
      </nav>
      {/* menu for mobile */}
      <Mobile 
        mobile={mobile} 
        setMobile={setMobile}
      />
    </header>
  )
}

export default Navbar;