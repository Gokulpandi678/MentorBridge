import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export const Name = () => {
  
  const navigate = useNavigate();
  const [message, setMessage] = useState('')

  const context = useContext(UserContext);

  if(!context){
    throw new Error('UserContext is undefined')
  }

  const { userData, setUserData } = context;

  const nameValidate = () => {
    if(userData.firstName === '' || userData.lastName === ''){
      setMessage('Enter the first name and last name')
    }else if(userData.firstName === ''){
      setMessage('Enter the first name')
    }else if(userData.lastName === ''){
      setMessage('Enter the last name')
    }else{
      navigate('/summary')
    }
  }

  return (
    <div className='d-flex flex-column align-items-center gap-3'>
      <h2>Enter your Name</h2>

      <input 
        type="text" 
        className='form-control w-25' 
        placeholder='Enter your first name'
        onChange={(e) => setUserData({...userData,'firstName':e.target.value})}
        required
      />
      <input 
        type="text" 
        className='form-control w-25' 
        placeholder='Enter your last name'
        onChange={(e) => setUserData({...userData,'lastName':e.target.value})}
        required
      />

      {message && <p className='text-danger m-0'>{message}</p>} 

      <div className="navigate-controls w-25 d-flex justify-content-between">
        <button 
          className='btn btn-primary '
          onClick={() => navigate('/email')}
          >
          Prev
        </button>
        <button 
          className='btn btn-primary'
          onClick={nameValidate}
          >
          Next
        </button>
      </div>
    </div>
  )
}
