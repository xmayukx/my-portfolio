import Link from "next/link";
import React, { useEffect, useState } from "react";
import GitHub from "./icons/Github";
import IconInstagram from "./icons/Instagram";
import IconLinkedin from "./icons/LinkedIn";
import IconTwitter from "./icons/Twitter";
import Typewriter from 'typewriter-effect';
export default function Hometxt() {

  return (
    <div className="relative top-[12rem] flex flex-col">
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
  );
}
