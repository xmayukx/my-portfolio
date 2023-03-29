import React, { useEffect, useState } from "react";
import Burger from "./Burger";
import Link from "next/link";
import { navLinks } from "@/data";

export default function Navbar() {
  
  return (
    <div className="relative z-40">
      <nav className={`fixed top-[0rem] left-0 right-0 robo backdrop-blur-lg`}>
        <ul className="flex justify-center gap-[45px] lg:gap-[10rem] p-10">
          {
            navLinks.map((link, key) => {
              return (
                <Link key={key} href={link.path} className="">
                  <li className="text-slate-50 lg:hover:text-amber-300 text-xs lg:text-sm font-semibold">
                    <span className="text-amber-300">{link.index}.</span>  {link.name}
                  </li>
                </Link>
              )
            })
          }
        </ul>
      </nav>
    </div>
  );
}
