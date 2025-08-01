import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import { itemJotai } from '../jotai/itemJotai'
import { ItemTable } from '../modules/ItemTable';
import SortDropdown from '../components/SortDropdown';

export const DisplayItems = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [items, setItems] = useAtom(itemJotai);
    
    const fetchItems = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setItems(result);
    }
    
    useEffect(() => {
        setTimeout(() => {
            fetchItems();
            setIsLoading(false);
        },1500)
    },[])

    return (
        <div>
            <h1>Item Management Dashboard</h1>
            {isLoading ? <p>Loading...</p> :
                <div>
                    <div className='flex'>
                            <SortDropdown />

                        <button 
                            className='btn btn-blue'
                        >
                            Filter
                        </button>
                    </div>
                    <ItemTable /> 
                </div>
            }
        </div>
    )
}
