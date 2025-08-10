import React from 'react'

type LogoImageProps = {
    logo:string,
    logoName:string
}

export const LogoImage:React.FC<LogoImageProps> = ({logo, logoName}) => {
  return (
    <img 
        src={logo}  
        alt={logoName}
    />
  )
}
