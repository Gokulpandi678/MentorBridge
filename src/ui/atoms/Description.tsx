import React from 'react'

type DescriptionProps = {
    content:string
}

export const Description:React.FC<DescriptionProps> = ({ content }) => {
  return (
    <p className='text-secondary'>{content}</p>
  )
}
