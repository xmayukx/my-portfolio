// eslint-disable-next-line react/no-unescaped-entities
import React, { useEffect, useState } from "react";
import greet from "./intro";
import  About  from "./about";
// import data from "./api/hello";


export function Hometxt() {
  // const properties = Object.keys(greet);
  // console.log(greet);


  return (
    <div>
      <div>
        <div className="lg:pl-72 lg:pt-2 lg:px-12 pl-7 leading-relaxed lg:text-justify">
          <h3 className="text-yellow-400 robo lg:text-base text-xl ">Hi, my name is</h3>

          <h1 className="montse text-slate-50 lg:text-5xl text-4xl font-extrabold">Mayukh Hazari</h1>

          <h1 className="montse text-slate-400 lg:text-5xl text-4xl font-bold" aria-label="I'm a developer">

            I&apos;m a&nbsp;<span className="typewriter thick" />
          </h1>

          <p className="text-slate-50 pt-7 merri font-light text-left lg:text-left lg:pr-[4rem] pr-20">
            Transforming ideas into seamless 🚀 digital experiences 🌐 through full-stack development 🖥️ and occasional design expertise 🎨.
          </p>
        </div>
        {/* <div className="montse p-4 w-3/6 mx-auto text-lime-50 relative bottom-36 leading-relaxed bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {greet.about}
        </div> */}
        <About/>
      </div>
    </div>

  );
}
