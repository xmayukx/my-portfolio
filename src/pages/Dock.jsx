import Link from "next/link";
import GitHub from "./icons/Github";
import Instagram from "./icons/Instagram";
import Linkedin from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";

export default function Dock() {
    return (
        <>
            <div  className="lg:visible invisible">
                <ul className="grid grid-cols-1 gap-8 pl-8 top-[15rem] fixed left-0 ">
                    <Link href="https://github.com/xmayukx" className="hover:text-yellow-300 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200" >
                        <li><GitHub /></li>
                    </Link>
                    <Link href="https://twitter.com/xmayuk_hx" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                        <li><Twitter /></li>
                    </Link>
                    <Link href="https://www.instagram.com/xmayuk_hx/" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                        <li><Instagram /></li>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mayukh-hazari-212276220" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200">
                        <li><Linkedin /></li>
                    </Link>
                </ul>
            </div>
        </>
    )
}