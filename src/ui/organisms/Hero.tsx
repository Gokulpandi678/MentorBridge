import React from 'react'
import { HeroContent } from '../molecules/HeroContent'
import heroImage from '../../assets/image-mockups.png'

export const Hero = () => {
  return (
    <div className='d-flex justify-content-between align-items-center bg-light mr-n2 p-4 overflow-hidden'>
        <HeroContent />
        <div className='bg-image d-flex justify-content-end'>
          <img src={heroImage} alt="Hero image" className='w-50 scale-105'/>
        </div>
    </div>
  )
}
