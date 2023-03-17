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
    const { isLoading, data, error, isError } = useQuery('dogs', async () => {

        const res = await fetch('/api/gitSH');
        const gitAPI = await res.json();
        const repoAPI = await fetch(gitAPI.repos_url);
        if (!repoAPI.ok) {
            console.error("Fetching error!");
        } else {
            const data = await repoAPI.json();
            return data;
        }
    })

    if (isError) {
        console.log(error.message);
    } else if (isLoading) {
        console.log('Loading...');
    }

    const cachedData = queryClient.getQueryData('dogs');


    return (

        <div className="container mt-[12rem] mb-[15rem]" id="work">
            <div className="mb-8  flex lg:ml-0 ml-7">
                <span className=" text-slate-50 lg:text-2xl text-lg font-bold merri"><span className="text-amber-300 robo font-normal lg:text-lg text-base">02. </span>Some Stuffs That I&apos;ve Built</span><hr className="lg:w-64 w-[4rem]  h-[2px] my-8 bg-gray-800 border-0 relative bottom-[15px] left-4" />
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-[0.75rem] w-3/4 grid grid-cols-1 lg:mx-0 mx-auto">
                {
                    Array.isArray(cachedData) ?
                        (cachedData.map((d,index) => Array.isArray(d.topics) ?
                            (
                                (d.topics.map((topic, key) => topic === "pf" ?
                                    <Card key={key} title={d.name} description={d.description} repoLink={d.html_url} exlink={d.homepage} /> :
                                    console.log("Somethings wrong 3")))
                            )
                            :
                            console.log("topics not array"))) :
                        console.log("data not an array")
                }
            </div>
        </div>

    )
}