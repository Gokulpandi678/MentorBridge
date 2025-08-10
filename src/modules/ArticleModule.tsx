import React from 'react'
import { SectionTitle } from '../ui/atoms/SectionTitle'
import { ArticleCards } from '../ui/organisms/ArticleCards'

export const ArticleModule:React.FC = () => {
  return (
    <div className='p-10 d-flex flex-column gap-4 bg-gray-200'>
        <SectionTitle title='Latest Articles'/>
        <ArticleCards />
    </div>
  )
}
