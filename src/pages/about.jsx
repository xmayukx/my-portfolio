import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {


    return (


        <div className="lg:grid lg:grid-cols-2 lg:gap-0" id="about">


            <div className="text-left merri text-slate-50 leading-1 pl-7">
                <div className="flex">
                    <span className="text-slate-50  lg:text-2xl text-xl font-bold mb-4"><span className="text-amber-300 robo font-normal lg:text-lg text-base">01. </span>About Me</span><hr className="lg:w-64 w-20 h-[2px] my-8 bg-gray-800 border-0 relative bottom-[15px] left-4"/>
                </div>
                <div className="mr-7 lg:mr-[5rem] mt-4 font-light">
                    <p className="mb-6">Hi there! 👋 My name is Mayukh Hazari, and I am a full stack web developer with a passion for creating dynamic and engaging web applications.💻 <br /> </p>
                    <p className="mb-6">Whether it is building responsive user interfaces or developing robust backend systems, I love the challenge of bringing innovative ideas to life through code. 💡 As a second year student, I am always seeking out new opportunities to expand my skillset and tackle exciting projects.</p>
                    <p className="mb-12">🚀 With a keen eye for design and a commitment to delivering high-quality work, I am confident that I can help bring your web development goals to life. So let&apos;s collaborate and create something amazing together! 🤝</p>
                    <p className="mb-4"> Here some technologies I have been working with recently- </p>
                    <ul className="grid grid-cols-2 gap-2 inco mb-12">
                        <li>- Node.js</li>
                        <li>- Next.js</li>
                        <li>- React.js</li>
                        <li>- MongoDB</li>
                        <li>- Python </li>
                        <li>- JavaScript (ES6+)</li>
                        <li>- SQL</li>
                    </ul>

                </div>
            </div>

            <div className="lg:mt-14">
                <Image src="/assets/me.png" alt="me" width="640" height="640" className="rounded-2xl lg:mx-0 mx-auto lg:w-2/4 w-2/3 grayscale hover:grayscale-0" />
            </div>


        </div>
    );
}