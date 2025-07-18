import React from 'react'
import { useForm } from 'react-hook-form'

const AddressForm = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        alert('Submitted Successfully ', JSON.stringify(data, null, 2));
        reset();
    }

    return (
        <div className='d-flex flex-column align-items-center mt-3'>

            <h1>Address Form with Select Dropdown</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='shadow px-5 py-3 w-25 rounded'>
                <div className='form-group'>
                    <label htmlFor="name" className='form-label'>Name:</label>
                    <input className='form-control' {...register('name', {required: "Name is required"})} /> <br />
                    {errors.name && <p className='text-danger'>{errors.name.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input className='form-control' {...register('email', {required: "Email is required"})} /> <br />
                    {errors.email && <p className='text-danger'>{errors.email.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor="phone" className='form-label'>Country:</label>
                    <select className='form-select' 
                        {
                            ...register('country',{ validate:(value) => value !== "" || 'Please select country'})
                        }
                    >
                        <option value="">-- Select country --</option>
                        <option value="India">India</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="England">England</option>
                    </select>
                    <br />
                    {errors.country && <p className='text-danger'>{errors.country.message}</p>}
                </div>

                <div className='form-group'>
                    <label htmlFor="zip" className='form-label'>ZipCode:</label>
                    <input 
                        className='form-control' 
                        {
                            ...register('zipCode', {required: "Zipcode is required", pattern: {value:/^[0-9]{6}$/,message:'Zipode must be 6 digits'}})
                        } /> <br />
                    {errors.zipCode && <p className='text-danger'>{errors.zipCode.message}</p>}
                </div>
                
                <button className='btn btn-primary w-100'>Submit</button>
            </form>
        </div>
    )
}

export default AddressForm