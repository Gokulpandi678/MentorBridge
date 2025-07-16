import { useQuery } from '@tanstack/react-query';
import React from 'react'

const fetchAPI = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!res.ok)
        throw new Error("Network response was not ok");
    return await res.json()
}

const ListFetcher = () => {
    const {data, isLoading, isError, error} = useQuery({
        queryKey:['users'],
        queryFn:fetchAPI
    })
    console.log(data)

    return (
        <div>
            <h1 className='text-center'>1) Listing users from API using Tanstack Query</h1>
            {
                isLoading ? <p>Loading...</p> : isError ? <p>{error}</p> : <ul>
                    {data.map((user, i) => <li>{user.name}</li>)}
                </ul>
            }
        </div>
    )
}

export default ListFetcher
