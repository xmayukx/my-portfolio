import Link from "next/link";
import GitHub from "./icons/Github";
import IconInstagram from "./icons/Instagram";
import IconLinkedin from "./icons/LinkedIn";
import IconTwitter from "./icons/Twitter";

export default function Dock() {
    return (
        <div className="lg:visible invisible">

            <ul className="grid grid-cols-1 gap-8 pl-8 top-[25rem] fixed left-0 ">
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


            <div className="top-[37rem] fixed right-[2.5rem] rotate-90">
                <Link href="mailto:hazari.mayukh77@gmail.com">
                    <span className=" text-slate-400 robo fixed right-[0] text-sm hover:text-yellow-300">hazari.mayukh77@gmail.com</span>
                </Link>
            </div>
        </div>
    )
} 5