import React from 'react'
import { useAtom } from 'jotai'
import { toggleAtoms } from '../../jotai/toggleAtom.js'

const Dark = () => {

    const [toggleData, setToggleData] = useAtom(toggleAtoms);


    return (
        <div className='dark h-full flex flex-column'>
            <h1>Dark Page</h1>
            <button 
                onClick={() => setToggleData({light:true,dark:false})}
                className='btn btn-light'
            >
                Light
            </button>
        </div>
    )
}

export default Dark
