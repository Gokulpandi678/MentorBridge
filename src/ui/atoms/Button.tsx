import React from 'react'

type ButtonProps = {
    buttonText:string
}

export const Button:React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <button className='btn btn-success rounded-5'>
        {buttonText}
    </button>
  )
}
