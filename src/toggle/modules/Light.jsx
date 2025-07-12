import React from 'react'
import { useAtom } from 'jotai'
import { toggleAtoms } from '../../jotai/toggleAtom.js'


const Light = () => {

    const [toggleData, setToggleData] = useAtom(toggleAtoms);

    return (
        <div className='flex flex-column'>
            <h1>Light Page</h1>
            <button 
                onClick={() => setToggleData({light:false,dark:true})}
                className='btn btn-dark'
            >
                Dark
            </button>

        </div>
    )
}

export default Light
