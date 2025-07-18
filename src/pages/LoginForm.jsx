import React from 'react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
    const { register, handleSubmit, formState:{errors}, reset } = useForm();

    const onSubmit = (data) => {
        console.log('submitted', data);
        reset();
    }

    return (
        <div className='d-flex flex-column align-items-center mt-2'>
            <h1 className='mb-3'>Simple Login Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='border shadow py-4 px-5 w-25 rounded'>
                <div className='form-group'>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input className='form-control' {...register('email', {required: "Name is required"})} /> <br />
                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                </div>
                <div className='form-group'>
                    <label htmlFor="password" className='form-label'>password:</label>
                    <input className='form-control' {...register('password',{required: "Password is required"})} />
                    {errors.password && <p className='text-danger'>{errors.password.message}</p>}
                </div>
                <button type='submit' className='btn btn-primary w-100'>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm