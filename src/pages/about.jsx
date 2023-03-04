import useSWR from "swr";
import Image from "next/image";
const fetcher = async (url) => await fetch(url).then((res) => res.json()).catch((err) => console.log(err));
// const fetcher = async (url) => {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data); // log the entire response object
//     return data;
//   };

export default function About() {

    const { data, error, isLoading } = useSWR(
        "/api/gitSH",
        fetcher,
    );

    // console.log(data.avatar_url);

    return (
        <div>
            <div className="montse p-8 relative lg:w-2/5 mx-auto text-lime-50 top-20 flex justify-self-center leading-relaxed bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                {isLoading ? "Loading..." : error || !data.avatar_url ? "Error: Could not load avatar image" : <Image width={50} height={50} quality={90} src={data.avatar_url + ".png"} alt="profile-pic" className="lg:rounded-full rounded-3xl lg:max-w-xs flex justify-self-center lg:w-1/5 w-2/4" />}

            </div>
        </div>
    );
}