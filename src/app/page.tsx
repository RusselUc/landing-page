"use client";
import Image from "next/image";
import furniture from "@/assets/images/furniture.png";
import furnitureMobile from "@/assets/images/furniture-mobile.png";
import MenuIcon from "@/assets/icons/MenuIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import { InlineWidget } from "react-calendly";

const Home = () => {
  const uri = "https://calendly.com/russelarielucpuc ";
  return (
    <div className="bg-[#fdfeff] w-full h-screen">
      <nav className="md:flex h-14 items-center hidden">
        <ul className="flex flex-row justify-between w-full px-4">
          <li>Salas</li>
          <li>Comedores</li>
          <li>Recámaras</li>
          <li>Otros muebles</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <nav className="md:hidden flex justify-between">
        <button className="m-3 w-8 h-8">
          <MenuIcon />
        </button>
        <button className="m-3 w-8 h-8">
          <SearchIcon />
        </button>
      </nav>

      <div className="flex w-full h-full flex-col">
        <Image className="sm:block hidden" src={furniture} alt="furniture" />
        <Image
          className="w-full h-4/5 object-cover sm:hidden"
          src={furnitureMobile}
          alt="furniture"
        />
        <div
          className="calendly-inline-widget h-full absolute"
          data-url="https://calendly.com/russelarielucpuc"
        ></div>
      </div>

      {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
    </div>
  );
};
export default Home;
