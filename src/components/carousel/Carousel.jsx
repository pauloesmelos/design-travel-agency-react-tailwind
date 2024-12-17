import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong, FaCircle } from "react-icons/fa6";
import BoraBora2 from '../../assets/borabora2.jpg';
import Keywest from '../../assets/keywest.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import Maldives3 from '../../assets/maldives3.jpg';

const Carousel = () => {
  const [index, setIndex] = React.useState(0);
  const [imgs, setImgs] = React.useState([]); 
  const slider = React.useRef();
  const handleCarousel = (type) => {
    if(type === "left") {
      setIndex(e => e - 1 > 0 ? e - 1 : 0);
    }
    else {
      setIndex(e => e + 1 < imgs.length ? e + 1 : 0);
    }
    clearInterval(slider.current);
  }
  const nextCarousel = (array) => {
    if(array.length) {
      setIndex(e => (e + 1 < array.length) ? e + 1 : 0);
    }
  }

  React.useEffect(() => {
    const arrayImgs = [BoraBora2, Keywest, Maldives, Maldives2, Maldives3];
    setImgs(arrayImgs);
    slider.current = setInterval(() => nextCarousel(arrayImgs), 2500);
    return () => clearInterval(slider.current);
  }, []);

  return (
    <section className="py-20 w-full bg-white">
      <div className="w-full max-w-[1400px] mx-auto px-5">
        <div className="w-full">
            {/* Carousel */}
            <div className="relative w-full h-full">
                {imgs?.map((img, id) => (
                    <div key={id * Math.random()}>
                        {id === index && <img className="rounded-md shadow-md object-cover w-full h-[500px] md:h-[800px] border-double border-4 border-blue-300" src={img} />}
                    </div>
                ))}
                <div className="absolute top-[50%] w-full flex justify-between items-center px-4 md:px-12">
                    <div onClick={() => handleCarousel("left")} className="p-2 bg-white rounded-md cursor-pointer hover:opacity-90">
                      <FaArrowLeftLong className="text-sky-300 text-4xl md:text-6xl" />
                    </div>
                    <div onClick={() => handleCarousel("right")} className="p-2 bg-white rounded-md cursor-pointer hover:opacity-90">
                      <FaArrowRightLong className="text-sky-300 text-4xl md:text-6xl" />
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div className="flex items-center gap-4 mt-4">
                    {imgs.map((_, i) => (
                      <div className="cursor-pointer" key={i * Math.random()}>
                        <FaCircle className={i === index ? "text-blue-600 text-sm" : "text-gray-300 text-sm"} />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel;