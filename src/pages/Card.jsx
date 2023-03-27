import Link from 'next/link';
import React, { useEffect } from 'react';
import ExternalLink from './icons/ExternalLink';
import GitHub from "./icons/Github"




export default function Card(props) {
    const { title, description, repoLink, exLink } = props;
    return (
        <div>
            <div className="card w-[15rem] h-[17rem] bg-base-100 shadow-lg inco">
                <div className="card-body">
                    <h2 className="card-title text-lg text-amber-300">{title}</h2>
                    <p className="text-xs">{description}</p>
                    <div className="card-actions flex justify-start flex-row gap-7">

                        {
                            repoLink && <Link href={repoLink}>
                                <GitHub />
                            </Link>
                        }

                        {
                            exLink && <Link href={repoLink}>
                                <ExternalLink />
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}