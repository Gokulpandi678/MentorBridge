import React from 'react'

type AuthorTextProps = {
    name:string,
}

export const AuthorText:React.FC<AuthorTextProps> = ({name}) => {
  return (
    <p className='fs-10 text-secondary'>{name}</p>
  )
}
