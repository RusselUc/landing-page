import ChevronLeftIcon from "@/assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/assets/icons/ChevronRigthIcon";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface CarouselProps {
  images: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? prevIndex : prevIndex + 1
    );
  };

  return (
    <div className="w-full relative">
      <div className="flex justify-around">
        <div className="hidden xl:flex space-x-4">
          {" "}
          {/* Mostrar en pantallas medianas y grandes */}
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Imagen ${index + currentIndex + 1}`}
              className="lg:w-[200px] rounded-lg"
            />
          ))}
        </div>
        <div className="xl:hidden flex justify-center">
          {" "}
          {/* Mostrar en pantallas móviles */}
          {images.slice(currentIndex, currentIndex + 1).map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Imagen ${index + currentIndex + 1}`}
              className="w-11/12 sm:max-w-xs rounded-lg"
            />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-between">
        <button className="bg-white h-10 w-10 rounded" onClick={previousImage}>
          <ChevronLeftIcon />
        </button>
        <button className="bg-white h-10 w-10 rounded" onClick={nextImage}>
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
