import React from 'react'

import { LogoImage } from '../atoms/LogoImage'
import { HeaderNavList } from '../molecules/HeaderNavList'
import { Button } from '../atoms/Button'
import { images } from '../../assets'

export const Header: React.FC = () => {

    const navList = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

    return (
        <header className='d-flex justify-content-around align-items-center p-3'>
            <LogoImage logo={images.logoDark} logoName='Digital bank' />
            <HeaderNavList navList={navList} color='secondary'/>
            <Button buttonText='Request Invite'/>
        </header>
    );
}
