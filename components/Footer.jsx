import React from "react";
import Image from "next/image";
import KS from "@/public/ks.png";

const Footer = () => {
  return (
    <footer className="w-full py-3  border-t border-gray-150">
      <div className="w-[1140px] mx-auto flex justify-between text-gray-700">
        <div className="flex gap-2 items-center">
          <Image src={KS} width={30} height={30} />
          <h1 className="font-bold text-sm relative">
            All rights to Kindness Shake 2024{" "}
            <span className="absolute -top-2 -right-3">©</span>
          </h1>
        </div>

        <ul className="flex gap-2 text-sm items-center">
          <li className="cursor-pointer hover:text-gray-400">Privacy</li>
          <li className="cursor-pointer hover:text-gray-400">About Us</li>
          <li className="cursor-pointer hover:text-gray-400">FAQs</li>
          <li className="cursor-pointer hover:text-gray-400">Support</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
