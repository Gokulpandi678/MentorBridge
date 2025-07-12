import { useAtom } from 'jotai'
import React from 'react'
import { loginAtom } from '../../jotai/loginAtom'

const Welcome = () => {

  const [loginData, setLoginData] = useAtom(loginAtom);

  return (
    <div className='m-2'>
      <h1>Welcome <span className='text-primary'>{loginData.name}</span> !</h1>
      <p>Enjoy 10% off your first order with code WELCOME10</p>
    </div>
  )
}

export default Welcome
