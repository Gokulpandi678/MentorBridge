import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export const Summary = () => {

  const navigate = useNavigate();

  const context = useContext(UserContext);
  
  if(!context){
    throw new Error('UserContext is undefined')
  }

  const { userData } = context;

  return (
    <div className='d-flex flex-column align-items-center gap-3'>
      <h2>Summary page of the User</h2>

      <div className='w-25'>
        <div className='row'>
          <div className="col fw-bold">Email:</div>
          <div className="col">{userData.email}</div>
        </div>
        <div className='row'>
          <div className="col fw-bold">First Name:</div>
          <div className="col">{userData.firstName}</div>
        </div>
        <div className='row'>
          <div className="col fw-bold">Last Name:</div>
          <div className="col">{userData.lastName}</div>
        </div>
      </div>

      <button 
        className='btn btn-primary '
        onClick={() => navigate('/')}
      >
        Back to home
      </button>
    </div>
  )
}
