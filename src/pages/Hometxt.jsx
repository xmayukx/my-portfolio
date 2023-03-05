import React, { useEffect, useState } from "react";
import greet from "./intro";
import About from "./about";



export default function Hometxt() {

  return (
    <div>
      <div>
        <div className="lg:pl-72 lg:pt-2 lg:px-12 leading-relaxed lg:text-justify">
          <div className="mb-56 mt-52 leading-1 pl-7">
            <h3 className="text-yellow-400 robo lg:text-lg text-xl ">Hi, my name is</h3>

            <h1 className="montse text-slate-50 lg:text-7xl text-4xl font-extrabold">Mayukh Hazari</h1>

            <h1 className="montse text-slate-400 lg:text-7xl text-4xl font-bold" aria-label="I'm a developer">

              I&apos;m a&nbsp;<span className="typewriter thick" />
            </h1>

            <p className="text-slate-50 pt-7 merri lg:merri font-light text-left lg:text-left lg:pr-[45rem] pr-20">
              Transforming ideas into seamless 🚀 digital experiences 🌐 through full-stack development 🖥️ and occasional design expertise 🎨.
            </p>
          </div>

          <About />



        </div>
        

      </div>
    </div>

  );
}
