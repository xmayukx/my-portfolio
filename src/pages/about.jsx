import useSWR from "swr";
import Image from "next/image";
const fetcher = async (url) => await fetch(url).then((res) => res.json()).catch((err) => console.log(err));


export default function About() {

    const { data, error, isLoading } = useSWR(
        "/api/gitSH",
        fetcher,
    );

    

    return (


        <div className="lg:grid lg:grid-cols-2 lg:gap-1">

            
            <div className="text-left merri text-slate-50 leading-1 pl-7">
                <div>
                    <span className="text-slate-50  text-2xl font-bold mb-4"><span className="text-amber-300 robo font-normal text-lg">01. </span>About Me</span>
                </div>
                <div className="mr-7 lg:mr-[5rem] mt-10 font-light">
                    <p className="mb-6">Hi there! 👋 My name is Mayukh Hazari, and I am a full stack web developer with a passion for creating dynamic and engaging web applications.💻 <br /> </p>
                    <p className="mb-6">Whether it is building responsive user interfaces or developing robust backend systems, I love the challenge of bringing innovative ideas to life through code. 💡 As a second year student, I am always seeking out new opportunities to expand my skillset and tackle exciting projects.</p>
                    <p className="mb-12">🚀 With a keen eye for design and a commitment to delivering high-quality work, I am confident that I can help bring your web development goals to life. So let&apos;s collaborate and create something amazing together! 🤝</p>
                    <p className="mb-4"> Here some technologies I have been working with recently- </p>
                    <ul className="grid grid-cols-2 gap-2 inco mb-12">
                        <li>- Node.js</li>
                        <li>- Next.js</li>
                        <li>- React.js</li>
                        <li>- MongoDB</li>
                        <li>- Python</li>
                        <li>- JavaScript (ES6+)</li>
                        <li>- SQL</li>
                    </ul>

                </div>
            </div>

            <div className="lg:mt-14">
                {/* {isLoading ? "Loading..." : error || !data.avatar_url ? "Error: Could not load avatar image" : <Image width={700} height={700} quality={100} src={data.avatar_url + ".png"} alt="profile-pic" className="rounded-2xl lg:w-2/4" />} */}
                <Image src="/assets/me.png" alt="me" width="640" height="640" className="rounded-2xl lg:mx-0 mx-auto lg:w-2/4 w-2/3 grayscale hover:grayscale-0" />
            </div>


        </div>
    );
}