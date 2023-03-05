import styles from "../styles/Navbar.module.css";
import { Inter } from "@next/font/google";
import React, { useEffect, useState } from "react";
import { style } from "@mui/system";
import { ClassNames } from "@emotion/react";
import Burger from "./Burger";
import Link from "next/link";

export function Navbar(props) {
  const hide = "invisible lg:visible";
  return (
    <div className="relative z-40">
      <nav
        className="fixed top-0 left-0 right-0 flex lg:text-base lg:py-16 p-12 items-center justify-center text-amber-300 robo backdrop-blur-lg bg-white/5">
        <ul className=" flex list-none lg:gap-32 gap-6 lg:text-sm text-xs font-bold">
          <li>
            <Link href="/about">01.<span className="text-slate-50 lg:hover:text-amber-300">About</span></Link>
          </li>
          <li>
            <Link href="/about">02.<span className="text-slate-50 lg:hover:text-amber-300">Work</span></Link>
          </li>
          <li>
            <Link href="/about">03.<span className="text-slate-50 lg:hover:text-amber-300">Contact</span></Link>
          </li>
          <li>
            <Link href="/about">04.<span className="text-slate-50 lg:hover:text-amber-300">Resume</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
