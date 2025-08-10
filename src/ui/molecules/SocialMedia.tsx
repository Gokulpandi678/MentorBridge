import React from 'react'
import { LogoImage } from '../atoms/LogoImage';
import { images } from '../../assets'

export const SocialMedia = () => {

    const socialImages = [images.facebook, images.youtube, images.twitter, images.pinterest, images.instagram];

  return (
    <div className='d-flex flex-column gap-5'>
        <LogoImage logo={images.logoLight} logoName='Digital Bank'/>
        <div className='d-flex gap-3'>
            {
                socialImages.map(image => <img src={image} alt="" />)   
            }
        </div>
    </div>
  )
}
