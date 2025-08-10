import React from 'react'

type SectionTitleProps = {
    title: string   
}

export const SectionTitle:React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2>{title}</h2>
  )
}
