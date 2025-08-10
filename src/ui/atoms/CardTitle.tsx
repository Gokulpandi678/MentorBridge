import React from 'react'

type CardTitleProps = {
    title:string,
}

export const CardTitle:React.FC<CardTitleProps> = ({ title }) => {
  return (
    <h5>{title}</h5>
  )
}
