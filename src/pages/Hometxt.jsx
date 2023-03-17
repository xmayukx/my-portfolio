import Link from "next/link";
import React, { useEffect, useState } from "react";
import About from "./about";
import Contact from "./Contact";
import Work from "./Work";
import GitHub from "./icons/Github";
import IconInstagram from "./icons/Instagram";
import IconLinkedin from "./icons/LinkedIn";
import IconTwitter from "./icons/Twitter";

export default function Hometxt() {

  return (
    <div>
      <div className="lg:pl-72 lg:pt-2 lg:px-12 leading-relaxed lg:text-justify">
        <div className="mb-56 mt-[12rem] leading-1 pl-7">
          <h3 className="text-amber-300 robo lg:text-lg text-xl ">Hi, my name is</h3>

          <h1 className="montse text-slate-50 lg:text-7xl text-4xl font-extrabold">Mayukh Hazari</h1>

          <h1 className="montse lg:text-slate-400 text-slate-400  lg:text-7xl text-4xl font-bold" aria-label="I'm a developer">

            I&apos;m a&nbsp;<span className="typewriter thick" />
          </h1>

          <p className="text-slate-50 pt-7 merri lg:merri font-light text-left lg:text-left lg:pr-[45rem] pr-20">
            Transforming ideas into seamless 🚀 digital experiences 🌐 through full-stack development 🖥️ and occasional design expertise 🎨.
          </p>

          <div className="lg:invisible visible relative top-5">
            <ul className="flex gap-7">
              <Link href="https://github.com/xmayukx" className="hover:text-yellow-300" >
                <li><GitHub /></li>
              </Link>
              <Link href="https://twitter.com/xmayuk_hx" className="transition ease-in-out">
                <li><IconTwitter /></li>
              </Link>
              <Link href="https://www.instagram.com/xmayuk_hx/">
                <li><IconInstagram /></li>
              </Link>
              <Link href="https://www.linkedin.com/in/mayukh-hazari-212276220">
                <li><IconLinkedin /></li>
              </Link>
            </ul>
          </div>
        </div>

        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}
