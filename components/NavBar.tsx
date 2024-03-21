import { logo } from "@/images";
import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center text-gray-300 w-full py-8 px-20">
      <Image src={logo} alt="logo" className="w-28" />
      <ul className="flex gap-20">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Features</li>
        <li className="cursor-pointer">Pricing</li>
      </ul>
      <button className="py-3 px-8 rounded-full bg-gradient-to-r from-gray-900 to-[#121212] hover:scale-110 transition-all ">
        Get Started
      </button>
    </nav>
  );
};

export default NavBar;
