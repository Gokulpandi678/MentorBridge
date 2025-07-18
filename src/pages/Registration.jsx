import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as yup from 'yup'

const schema = yup.object().shape({
    name:yup.string().required('Name is required'),
    email:yup.string().email('Invalid email').required('Email is required'),
    password:yup.string().min(6,'Password must be atleast 6 characters').required('Password is required'),
    confirmPassword:yup.string().oneOf([yup.ref('password')], 'Password must match').required('Confirm password is required')
})

const Registration = () => {

    const initialValues = {
        name:'',
        email:'',
        password:'',
        confirmPassword:''
    }

    const handleSubmit = (values) => {
        alert('Registration Successfully ' + JSON.stringify(values, null, 2));
    }

    return (
        <div className='d-flex flex-column align-items-center mt-2'>
            <h1>Registatration form with confirm password</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                <Form className=' shadow py-4 px-5 w-25 rounded'>
                    <div className='form-group '>
                        <label htmlFor="name">Name:</label>
                        <Field name='name' type='text' className='form-control' id='name'/>
                        <p className='text-danger'>
                            <ErrorMessage name='name'/>
                        </p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email:</label>
                        <Field name='email' type='email' className='form-control' id='email'/>
                        <p className='text-danger'>
                            <ErrorMessage name='email'/>
                        </p>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">password:</label>
                        <Field name='password' type='password' className='form-control'/>
                        <p className='text-danger'>
                            <ErrorMessage name='password'/>
                        </p>
                    </div>
                    <div>
                        <label htmlFor="">Confirm Password:</label>
                        <Field name='confirmPassword' type='password' className='form-control'/>
                        <p className='text-danger'>
                            <ErrorMessage name='confirmPassword'/>
                        </p>
                    </div>
                    <button type='submit' className='btn btn-primary w-100'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration