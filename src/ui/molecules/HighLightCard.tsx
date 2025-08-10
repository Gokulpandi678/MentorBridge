import React from 'react'
import { CardTitle } from '../atoms/CardTitle'
import { Description } from '../atoms/Description'

type HighLightCardProps = {
    avatar: string,
    avatarName: string,
    title: string,  
    description: string
}

export const HighLightCard:React.FC<HighLightCardProps> = ( {avatar, avatarName, title, description} ) => {
  return (
    <div className='w-75 d-flex flex-column gap-2'>
        <img src={avatar} alt={avatarName} className='w-25'/>
        <CardTitle title={title} />
        <Description content={description}/>
    </div>
  )
}
