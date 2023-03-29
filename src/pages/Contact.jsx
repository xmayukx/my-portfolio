import Link from "next/link";
import Footer from "./Footer";

export default function Contact() {
    return (
        <div className="mt-[10rem]" id="contact">
            <div className="flex justify-center">
                <span className="text-amber-300 text-base robo font-normal"><span className="font-normal text-base">03. </span>What&apos;s Next?</span>
            </div>
            <div className="flex justify-center">
                <span className="montse lg:text-5xl text-4xl  font-extrabold text-slate-50 mb-8" >Get In Touch</span>
            </div>
            <div className="text-center lg:mx-[13.5rem] mx-2 ">
                <span className="merri text-slate-400 text-base font-light">I&apos;m always seeking new opportunities to challenge myself and grow my skills. If you have any potential projects or collaborations in mind, please don&apos;t hesitate to get in touch.

                    Thanks for stopping by, and I look forward to hearing from you!</span>
            </div>

            <div className="flex justify-center mt-10 mb-28">
                <Link href="mailto:hazari.mayukh77@gmail.com">
                    <button type="button" className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-sm text-sm px-10 py-4 text-center mr-2 mb-2 dark:border-amber-400 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-amber-500 dark:focus:ring-amber-500">Say Hi.</button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}