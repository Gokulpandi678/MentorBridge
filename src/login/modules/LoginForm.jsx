import { useAtom } from 'jotai'
import React from 'react'
import { loginAtom } from '../../jotai/loginAtom'

const LoginForm = () => {

  const [loginData, setLoginData] = useAtom(loginAtom);
  
  return (
    <div className='w-25'>
      <h1 className='text-center'>Login </h1>
      <form className='w-100'>
        <div className="form-group mb-3">
          <label>Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp" 
            onChange={(e) => setLoginData({...loginData, name:e.target.value})}
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            onChange={(e) => setLoginData({...loginData, password:e.target.value})}  
          />
        </div>
        <button className="btn btn-primary" onClick={() => setLoginData({...loginData, loggedIn:true})}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
