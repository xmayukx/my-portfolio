import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from 'react-query';
import Card from './Card'
import React from 'react';

export default function Work() {

    const queryClient = useQueryClient();
    const { isLoading, data, error, isError } = useQuery('dogs', () => {

        return fetch('/api/gitSH')
            .then(res => res.json())
            .then(data => {
                return data
            });
    })
    if (isError) {
        console.log(error.message);
    } else if (isLoading) {
        console.log('Loading...');
    }

    return (

        <div className="mt-[15rem]" id="work">
            {/* <div className="mb-8  flex lg:ml-0 ml-7">
                <span className=" text-slate-50 lg:text-2xl text-lg font-bold merri"><span className="text-amber-300 robo font-normal lg:text-lg text-base">02. </span>Some Stuffs That I&apos;ve Built</span><hr className="lg:w-64 w-[4rem]  h-[2px] my-8 bg-gray-800 border-0 relative bottom-[15px] left-4" />
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-[0.75rem] w-3/4 grid grid-cols-1 lg:mx-0 mx-auto">
                {
                    Array.isArray(data) ?
                        (data.map((d, index) => Array.isArray(d.topics) ?
                            (
                                (d.topics.map((topic, key) => topic === "pf" &&
                                    <Card key={key} title={d.name} description={d.description} repoLink={d.html_url} exLink={d.homepage} />))
                            )
                            :
                            console.log({ error: "cant' iterate on topics" }))) :
                        console.log({ error: "API error." })
                }
            </div> */}

            <div className="text-slate-100 robo mb-6">
                <span className="text-sm mr-2 text-amber-300">02.</span>
                <span className="text-2xl font-semibold hover:text-amber-300">Stuffs I&apos;ve built</span>
            </div>

            <div className="carousel carousel-center max-w-md p-2 space-x-4 bg-inherit">
                {
                    Array.isArray(data) ?
                        (data.map((d, index) => Array.isArray(d.topics) ?
                            (
                                (d.topics.map((topic, key) => topic === "pf" &&
                                    <div className="carousel-item">
                                        <Card key={key} title={d.name} description={d.description} repoLink={d.html_url} exLink={d.homepage} />
                                    </div>
                                ))
                            )
                            :
                            console.log({ error: "cant' iterate on topics" }))) :
                        console.log({ error: "API error." })
                }
            </div>


        </div>

    )
}