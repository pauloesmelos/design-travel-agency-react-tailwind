import React from 'react';
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg';

const Paradises = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-5">
        <div className="w-full flex flex-col gap-5">
            {/* text */}
            <div className="text-center flex flex-col gap-3">
                <h1 className="text-neutral-800 font-bold text-4xl">Paradises</h1>
                <p className="text-lg">Best Paradises in the World</p>
            </div>
            {/* grid images */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="group rounded-lg relative cursor-pointer shadow-lg">
                    <img className="object-cover w-full h-full duration-200 ease-linear" src={BoraBora} />
                    {/* overlay */}
                    <div className="w-full h-full absolute top-0 left-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center">
                        <div className="w-[120px] px-4 py-2 bg-[#709dff] rounded-md">
                            <p className="text-white font-medium text-center">Ilha Bela</p>
                        </div>
                    </div>
                </div>
                <div className="group rounded-lg relative cursor-pointer shadow-lg">
                    <img className="object-cover w-full h-full duration-200 ease-linear" src={BoraBora2} />
                    <div className="absolute bg-black/50 top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <div className="bg-[#709dff] text-white font-medium px-4 py-2 rounded-md w-[120px]">
                            <p>Maragogi</p>
                        </div>
                    </div>
                </div>
                <div className="group rounded-lg relative cursor-pointer shadow-lg">
                    <img className="object-cover w-full h-full duration-200 ease-linear" src={Keywest} />
                    <div className="absolute bg-black/50 top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <div className="bg-[#709dff] text-white font-medium px-4 py-2 rounded-md w-[120px]">
                            <p className="text-nowrap text-center">Praia Grande</p>
                        </div>
                    </div>
                </div>
                <div className="group rounded-lg relative cursor-pointer shadow-lg">
                    <img className="object-cover w-full h-full duration-200 ease-linear" src={Maldives} />
                    <div className="absolute bg-black/50 top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <div className="bg-[#709dff] text-white font-medium px-4 py-2 rounded-md w-[120px]">
                            <p className="text-nowrap text-center">Ubatuba</p>
                        </div>
                    </div>
                </div>
                <div className="group rounded-lg relative cursor-pointer shadow-lg">
                    <img className="object-cover w-full h-full duration-200 ease-linear" src={Maldives2} />
                    <div className="absolute bg-black/50 top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <div className="bg-[#709dff] text-white font-medium px-4 py-2 rounded-md w-[120px]">
                            <p className="text-nowrap text-center">Itararé</p>
                        </div>
                    </div>
                </div>
                <div className="group rounded-lg relative cursor-pointer shadow-lg">
                    <img className="object-cover w-full h-full duration-200 ease-linear" src={Maldives3} />
                    <div className="absolute bg-black/50 top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
                        <div className="bg-[#709dff] text-white font-medium px-4 py-2 rounded-md w-[120px]">
                            <p className="text-nowrap text-center">Itapema</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Paradises;