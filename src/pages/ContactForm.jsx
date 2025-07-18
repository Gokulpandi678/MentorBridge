import React from 'react'
import { useForm } from 'react-hook-form'

const ContactForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        alert('Submitted Successfully ' + JSON.stringify(data, null, 2));
        reset();
    }

    return (
        <div className='d-flex flex-column align-items-center mt-3'>

            <h1>Contact Form using form hooks</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='shadow px-5 py-3 w-25 rounded'>
                <div className='form-group'>
                    <label htmlFor="fName" className='form-label'>Full Name:</label>
                    <input className='form-control' {...register('fullName', {required: "Name is required"})} /> <br />
                    {errors.fullName && <p className='text-danger'>{errors.fullName.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input className='form-control' {...register('email', {required: "Email is required"})} /> <br />
                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor="phone" className='form-label'>Phone:</label>
                    <input 
                        className='form-control' 
                        {
                            ...register('phone', {required: "Phone Number is required", pattern: {value:/^[0-9]{10}$/,message:'Phone Number must be 10 digits'}})
                        }
                    /> <br />
                    {errors.phone && <p className='text-danger'>{errors.phone.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor="message" className='form-label'>Message:</label>
                    <textarea className='form-control' {...register('message', {required: "Message is required"})}></textarea> <br />
                    {errors.message && <p className='text-danger'>{errors.message.message}</p>}
                </div>
                
                <button className='btn btn-primary w-100'>Submit</button>
            </form>
        </div>
    )
}

export default ContactForm