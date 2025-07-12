import React from 'react'
import { useAtom } from 'jotai';
import { loginAtom } from '../jotai/loginAtom';
import Welcome from '../login/modules/Welcome'
import LoginForm from '../login/modules/LoginForm'

const Login = () => {
  const [loginData, setloginData] = useAtom(loginAtom)
  return (
    <div className='d-flex justify-content-center'>
      {
        loginData.loggedIn ? <Welcome /> : <LoginForm /> 
      }
    </div>
  )
}

export default Login
