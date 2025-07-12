import { useAtom } from 'jotai'
import { toggleAtoms } from '../jotai/toggleAtom.js'
import React from 'react'
import Light from './modules/Light';
import Dark from './modules/Dark';

const Home = () => {

    const [toggleData] = useAtom(toggleAtoms);

    return (
        <div className='h-full flex'>
            {
                toggleData.light ? <Light /> : <Dark />
            }
        </div>
    )
}

export default Home
