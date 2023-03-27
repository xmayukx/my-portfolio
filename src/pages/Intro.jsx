import Link from "next/link";
import React, { useEffect, useState } from "react";
import GitHub from "./icons/Github";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import Typewriter from 'typewriter-effect';

export default function Intro() {

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <span className="robo text-yellow-300">Hi, my name is</span>
        <span className="text-slate-200 mt-[1px] montse text-4xl font-extrabold">Mayukh Hazari</span>
        <div className="flex text-slate-400 mt-[1px] montse text-4xl font-extrabold">
          <span className="mr-[10px]">I&apos;m a</span>
          <span>
            <Typewriter
              options={{
                strings: ['developer', 'reader', 'writer'],
                autoStart: true,
                loop: true,
                changeDeleteSpeed: "natural"
              }}
            />
          </span>
        </div>


      </div>

      <span className="text-slate-50 merri font-thin">
        Transforming ideas into seamless digital experiences through full-stack development and occasional design expertise.
      </span>

      <div className="flex flex-row gap-5 lg:invisible">
        <div className="lg:w-10 w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <GitHub />
        </div>
        <div className="lg:w-10 w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Linkedin />
        </div>
        <div className="lg:w-10 w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Twitter />
        </div>
        <div className="lg:w-10 w-1/12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Instagram />
        </div>
      </div>
    </div>
  );
}
