import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export const Email = () => {
  
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  
  const context = useContext(UserContext);

  if(!context){
    throw new Error('UserContext is undefined')
  }

  const { userData, setUserData } = context;

  const emailValidate = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    regex.test(userData.email) ? navigate('/name') : setMessage('Enter valid email');
  }

  return (
    <div className='d-flex flex-column align-items-center gap-3'>
      <h2>Enter your email</h2>
      
      <input 
        type="email" 
        className='form-control w-25' 
        onChange={(e) => setUserData({...userData,'email':e.target.value})}
        required
      />

      {message && <p className='text-danger m-0'>{message}</p>}

      <div className="navigate-controls w-25 d-flex justify-content-between">
        <button 
          className='btn btn-primary '
          onClick={() => navigate('/')}
          >
          &lt; Prev 
        </button>
        <button 
          className='btn btn-primary'
          onClick={emailValidate}
          >
          Next &gt;
        </button>
      </div>
    </div>
  )
}
