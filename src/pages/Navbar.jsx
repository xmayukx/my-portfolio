import styles from "../styles/Navbar.module.css";
import { Inter } from "@next/font/google";
import React, { useEffect, useState } from "react";
import { style } from "@mui/system";
import { ClassNames } from "@emotion/react";
import Burger from "./Burger";
import Link from "next/link";

export function Navbar(props) {
  return (
    <div>
      <nav
        className="flex lg:text-base lg:py-20 p-12 items-center justify-center text-amber-300 robo">
        <ul className="flex list-none lg:gap-32 gap-6 lg:text-sm text-sm font-bold">
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
