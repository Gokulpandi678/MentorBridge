import React from 'react'

type NavTextProps = {
    navText:string
    color:string
}

export const NavText:React.FC<NavTextProps> = ({ navText, color }) => {
  return (
    <li className={`hover-text-blue text-${color}`}>{navText}</li>
  )
}
