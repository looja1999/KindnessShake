"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import KS from "@/public/ks.png";
import Link from "next/link";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(null);
  const pathname = usePathname();

  useState(() => {
    if (pathname == "/") {
      setActiveNav(0);
    } else if (pathname == "/about") {
      setActiveNav(1);
    } else if (pathname == "/our-work") {
      setActiveNav(2);
    } else if (pathname == "/contact") {
      setActiveNav(3);
    }
  }, []);

  return (
    <nav className="h-20">
      <div className="max-w-[1140px] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={KS} width={40} height={40} />
          <h1 className="text-lg font-bold">Kindness Shake</h1>
        </div>
        <ul className="flex gap-4">
          <Link
            className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
              activeNav == 0 && "text-indigo-500"
            }`}
            onClick={() => setActiveNav(0)}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
              activeNav == 1 && "text-indigo-500"
            }`}
            onClick={() => setActiveNav(1)}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
              activeNav == 2 && "text-indigo-500"
            }`}
            onClick={() => setActiveNav(2)}
            href="/our-work"
          >
            Our Work
          </Link>
          <Link
            className={`cursor-pointer hover:bg-gray-100 rounded-md p-2 ${
              activeNav == 3 && "text-indigo-500"
            }`}
            onClick={() => setActiveNav(3)}
            href="/contact"
          >
            Contact
          </Link>
        </ul>
        <div className="flex gap-4">
          <Link
            className="text-center px-2 py-1.5 w-[80px] border border-gray-500 rounded-md hover:bg-gray-100"
            href="/join"
          >
            Join
          </Link>
          <Link
            className="text-center px-2 py-1.5 w-[80px] bg-indigo-700 text-white rounded-md  hover:text-indigo-700 hover:border hover:bg-indigo-100 hover:border-indigo-700"
            href="/sign-up"
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
