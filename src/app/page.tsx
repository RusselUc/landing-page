"use client";
import Image from "next/image";
import furniture from "@/assets/images/furniture.png";
import furnitureMobile from "@/assets/images/furniture-mobile.png";
import icono from "@/assets/images/icono.png";
import MenuIcon from "@/assets/icons/MenuIcon";
import SearchIcon from "@/assets/icons/SearchIcon";

import furniture1 from "@/assets/images/furniture-1.jpeg";
import furniture2 from "@/assets/images/furniture-2.jpeg";
import furniture3 from "@/assets/images/furniture-3.jpeg";
import { InlineWidget, PopupWidget } from "react-calendly";
import Carousel from "@/components/Carousel";

import Calendar from "@/components/Calendar";

const Home = () => {
  const uri = "https://calendly.com/russelarielucpuc/30min";
  const slides = [
    furniture1,
    furniture2,
    furniture3,
    furniture1,
    furniture2,
    furniture3,
  ];
  return (
    <div className="bg-[#fdfeff] w-full h-screen">
      <nav className="bg-white  w-full md:flex md:fixed h-14 items-center hidden justify-between px-5">
        <section className="w-1/4 flex items-center">
          <Image src={icono} className="object-contain w-14 h-14" alt="icono" />
          <h2 className="font-semibold text-xl">Showroom</h2>
        </section>
        <section className="w-3/4">
          <ul className="flex flex-row justify-between font-semibold w-full px-4">
            <li>Salas</li>
            <li>Comedores</li>
            <li>Recámaras</li>
            <li>Otros muebles</li>
            <li>Contacto</li>
          </ul>
        </section>
      </nav>
      <nav className="md:hidden flex justify-between items-center sticky top-0 bg-white">
        <button className="m-3 w-8 h-8">
          <MenuIcon />
        </button>
        <h2 className="font-semibold text-xl">Showroom</h2>
        <button className="m-3 w-8 h-8">
          <SearchIcon />
        </button>
      </nav>

      <div className="flex w-full h-full flex-col">
        <Image
          className="h-[50%] w-full object-cover sm:block hidden"
          src={furniture}
          alt="furniture"
        />
        <Image
          className="w-full h-3/5 object-cover sm:hidden"
          src={furnitureMobile}
          alt="furniture"
        />
        <div className="w-full h-2/5 md:h-3/5 absolute md:static bottom-[20%] px-2 sm:px-12 md:px-4 m-0 mt-4">
          <div className="flex flex-col md:flex-row w-full h-full gap-4">
            <div className="w-full flex-col gap-5 md:flex md:w-1/2">
              <section className="md:flex items-center w-full border rounded-md hidden">
                <input
                  type="text"
                  className="p-2 w-full focus:outline-none"
                  placeholder="Buscar muebles para salas..."
                />
                <button className="m-3 w-8 h-8">
                  <SearchIcon />
                </button>
              </section>

              <div className="w-full flex justify-center items-center h-full p-5">
                <Carousel images={slides} />
              </div>
            </div>
            <div className="w-full h-full md:w-1/2  md:flex-col md:flex md:gap-5">
              <h3 className="font-medium text-xl ml-4 text-center md:h-[58px]">
                ¡Cuentanos tu idea!
              </h3>
              <Calendar />
              {/* <InlineWidget
                url={uri}
                styles={{
                  width: "100%",
                  height: "100%",
                  padding: 0,
                  margin: 0,
                }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
