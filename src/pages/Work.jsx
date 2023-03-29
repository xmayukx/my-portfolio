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

        <div className="mt-[15rem] " id="work">
        
            <div className="text-slate-100 robo mb-6">
                <span className="text-sm mr-2 text-amber-300">02.</span>
                <span className="text-2xl font-semibold hover:text-amber-300">Projects</span>
            </div>

            <div className="carousel carousel-center max-w-md p-2 space-x-4 lg:space-x-0 bg-inherit lg:grid lg:grid-cols-3 lg:grid-flow-row lg:max-w-fit lg:max-h-fit gap-4 mx-auto ">
                {
                    Array.isArray(data) ?
                        (data.map((d, index) => Array.isArray(d.topics) ?
                            (
                                (d.topics.map((topic, k) => topic === "pf" &&
                                    <div key={k} className="carousel-item">
                                        <Card title={d.name} description={d.description} repoLink={d.html_url} exLink={d.homepage} />
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