import { useEffect, useState } from "react";
import Image from "next/image";

export default function About() {


    return (


        <div className='text-slate-200 mt-[15rem]' id="about">

            <div className="text-slate-100 robo mb-6">
                <span className="text-sm mr-2 text-amber-300">01.</span>
                <span className="text-2xl font-semibold hover:text-amber-300">About</span>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10">
                <div className="flex flex-col gap-5 merri font-thin">
                    <div className="flex flex-col gap-6">
                        <p>Hi there! My name is Mayukh Hazari, and I am a full stack web developer with a passion for creating dynamic and engaging web applications.</p>
                        <p>Whether it is building responsive user interfaces or developing robust backend systems, I love the challenge of bringing innovative ideas to life through code. As a second year student, I am always seeking out new opportunities to expand my skillset and tackle exciting projects.</p>
                        <p>With a keen eye for design and a commitment to delivering high-quality work, I am confident that I can help bring your web development goals to life. So let&apos;s collaborate and create something amazing together!</p>
                        <p> Here some technologies I have been working with recently- </p>
                    </div>

                    <ul className="grid grid-cols-2 gap-2 inco font-semibold">
                        <li>- Node.js</li>
                        <li>- Next.js</li>
                        <li>- React.js</li>
                        <li>- MongoDB</li>
                        <li>- Python </li>
                        <li>- JavaScript (ES6+)</li>
                        <li>- SQL</li>
                    </ul>
                </div>

                <div className="flex lg:justify-end justify-center">
                    <Image src="/assets/me.png" alt="me" width="640" height="640" className="rounded-xl lg:h-[20rem] lg:w-[19.5rem] w-2/3 grayscale hover:grayscale-0" />
                </div>
            </div>
        </div>
    );
}