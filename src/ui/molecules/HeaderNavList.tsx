import React from 'react'
import { NavText } from '../atoms/NavText'

type HeaderNavListProps = {
    navList:string[],
    color:string
}

export const HeaderNavList:React.FC<HeaderNavListProps> = ({ navList, color }) => {
  return (
    <ul className='list-unstyled d-flex gap-5'>
        {
            navList.map((item) => <NavText navText={item} color={color}/>)
        }
    </ul>
  )
}
