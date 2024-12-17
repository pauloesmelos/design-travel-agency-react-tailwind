import React from 'react';
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';

const Destinations = () => {
  return (
    <section className="w-full py-16 mt-14 bg-white">
      <div className="w-full max-w-[1400px] px-5 mx-auto">
        <div className="w-full flex flex-col gap-4">
            <h1 className="text-neutral-800 font-bold text-4xl text-center">
                All-Inclusive Resorts
            </h1>
            <p className="text-neutral-800 text-center text-lg">
                On the Best Beaches
            </p>
            <div className="w-full mt-4 grid grid-cols-4 lg:grid-cols-5 lg:gap-3 gap-4">
                <div className="col-span-4 row-span-2 lg:col-span-3 lg:row-span-2 overflow-hidden rounded-lg shadow-md hover:shadow-blue-400">
                    <img 
                        className="object-cover duration-300 hover:scale-125 ease-linear brightness-[50%]" 
                        src={BoraBora} alt="BoraBora" 
                    />
                </div>
                <div className="row-span-2 col-span-2 lg:row-span-1 lg:col-span-1 w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-blue-400">
                    <img 
                        className="object-cover row-span-1 w-full h-full duration-300 hover:scale-125 ease-linear brightness-[50%]" 
                        src={BoraBora2} alt="BoraBora2"
                    />
                </div>
                <div className="row-span-2 col-span-2 lg:row-span-1 lg:col-span-1 w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-blue-400">
                    <img 
                        className="object-cover row-span-1 w-full h-full duration-300 hover:scale-125 ease-linear brightness-[50%]" 
                        src={Keywest} alt="Keywest" 
                    />
                </div>
                <div className="row-span-2 col-span-2 lg:row-span-1 lg:col-span-1 w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-blue-400">
                    <img 
                        className="object-cover row-span-1 w-full h-full duration-300 hover:scale-125 ease-linear brightness-[50%]" 
                        src={Maldives} alt="Maldives" 
                    />
                </div>
                <div className="row-span-2 col-span-2 lg:row-span-1 lg:col-span-1 w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-blue-400">
                    <img 
                        className="object-cover row-span-1 w-full h-full duration-300 hover:scale-125 ease-linear brightness-[50%]" 
                        src={Maldives2} alt="Maldives2" 
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Destinations;