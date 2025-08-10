import React from 'react'
import { HeroTitle } from '../atoms/HeroTitle'
import { Description } from '../atoms/Description'
import { Button } from '../atoms/Button'

export const HeroContent:React.FC = () => {
  return (
    <div className='w-50 h-50 p-5'>
        <HeroTitle title='Next generation digital banking' />
        <Description content='Take your financial life online. Your Digitalbank account will be one-stop-shop for spending, saving, budgeting, investing and much more.'/>
        <Button buttonText='Request Invite'/>
    </div>
  )
}
