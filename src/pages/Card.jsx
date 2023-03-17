import Link from 'next/link';
import React, { useEffect } from 'react';
import ExternalLink from './icons/ExternalLink';
import GitHub from "./icons/Github"

export default function Card(props) {

    return (
        <div>
            <div className="relative mb-5 lg:mb-0 p-7 lg:h-[20rem] h-[16rem]  bg-gray-800 rounded-lg shadow hover:bg-transparent dark:bg-gray-800 dark:border-gray-700 inco w-4.5/5 hover:border hover:border-gray-700">
                <a>
                    <h5 className="mb-2 lg:text-2xl text-lg font-semibold tracking-tight text-yellow-300">
                        {props.title}
                    </h5>
                </a>
                <p className="mb-3 font-normal lg:text-base text-sm  text-gray-100 dark:text-gray-400">
                    {props.description}
                </p>
                <div className="flex absolute bottom-5 gap-11 ">
                    <Link href={props.repoLink}>
                        <GitHub />
                    </Link>
                    {
                        props.exlink && <Link href={props.exlink}>
                            <ExternalLink />
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
}