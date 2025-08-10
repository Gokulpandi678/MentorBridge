import React from 'react'
import { AuthorText } from '../atoms/AuthorText'
import { CardTitle } from '../atoms/CardTitle'
import { Description } from '../atoms/Description'

export type ArticleCardProps = {
    image: string,
    authorName: string,
    title:string,
    description:string
}

export const ArticleCard:React.FC<ArticleCardProps> = ({image, authorName, title, description}) => {

  return (
    <div className='w-75 d-flex flex-column shadow rounded-2'>
        <img src={image} alt="" className='w-100'/>
        <div className='p-3'>
            <AuthorText name={authorName}/>
            <CardTitle title={title}/>
            <Description content={description}/>
        </div>
    </div>

  )
}



