import React from 'react'

type HeroTitleProps = {
    title:string
}

export const HeroTitle:React.FC<HeroTitleProps> = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}
