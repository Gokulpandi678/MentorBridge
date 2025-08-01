import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    const navigate = useNavigate();
    

    return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Hey Welcome 👋</h1>
            <button
                className='btn btn-primary mt-3'
                onClick={() => navigate('/email')}
            >
                Click to fill the form
            </button>
        </div>
    )
}
