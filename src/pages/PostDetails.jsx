import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Accordion } from 'react-bootstrap'

const fetchAPI = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok)
        throw new Error("Network response was not ok");
    return await res.json()
}

const PostDetails = () => {
    const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
        queryKey: ['posts', 'users'],
        queryFn: fetchAPI
    })
    console.log(data)

    let eventKey = 0;

    return (
        <div className='m-3'>
            <div className='d-flex justify-content-center align-items-center gap-4 h-10'>
                <h1 className='text-center mb-3'>2) Post Details on Button Click using Tanstack Query</h1>
                <p className='btn btn-primary' onClick={refetch}>Refresh 🔃</p>
            </div>
            {
                isLoading ? <p>Loading...</p> : isError ? <p>{error}</p> : isFetching ? <p>Refreshing</p> :
                <Accordion defaultActiveKey="0">
                    {
                        data?.map((post, i) => (
                            <Accordion.Item eventKey={eventKey++} key={post.id}>
                                <Accordion.Header>{post.title}</Accordion.Header>
                                <Accordion.Body>{post.body}</Accordion.Body>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>
            }
        </div>
    )
}

export default PostDetails
