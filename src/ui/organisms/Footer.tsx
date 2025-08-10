import React from 'react'
import { SocialMedia } from '../molecules/SocialMedia'
import { HeaderNavList } from '../molecules/HeaderNavList'
import { CopyRights } from '../molecules/CopyRights'

export const Footer = () => {

    const navList = ['About', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'];

  return (
    <div className='bg-darkblue d-flex justify-content-around p-5'>
        <SocialMedia />
        <HeaderNavList navList={navList} color='light'/>
        <CopyRights />
    </div>
  )
}
