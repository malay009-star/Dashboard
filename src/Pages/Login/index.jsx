import React from 'react'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export const signInSchema = Yup.object({
  email: Yup.string().email().required('please enter email'),
  password: Yup.string().min(6).required('please enter password'),
})

const initialValues = {
  email: '',
  password: '',
}

function index() {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,
    onSubmit: (values, { resetForm }) => {
      // toast.success('form submitted')
      resetForm();
    },
  })


  return (
    <div className='container flex justify-center pt-10'>
      <form onSubmit={handleSubmit} className='w-full md:w-[50] lg:w-[45%] primary_shadow px-8 pt-6 pb-16 rounded-md'>
        <h3 className='text-[22px] font-medium'>Log in</h3>
        <h5 className='sm:text-[13px] md:mt-1'>Enter User & Password</h5>
        <div className='mt-4 sm:mt-8' htmlFor=''>
          <input className='text-[14px] pb-1 inline-block border-b focus:outline-none w-full text-[#303030] tracking-wider'
            type='email'
            name='email'
            autoComplete='off'
            id='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (<p className='text-[#DB4444] text-xs'>{errors.email}</p>) : null}
        </div><br />
        <div className='mt-1' htmlFor=''>
          <input className='text-[14px] pb-1 inline-block focus:outline-none border-b w-full text-[#000] tracking-wider'
            type='password'
            name='password'
            autoComplete='off'
            id='password'
            placeholder='Password'
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (<p className='text-[#DB4444] text-xs'>{errors.password}</p>) : null}
        </div>
        <div className='flex items-center justify-between gap-x-3 mt-8 w-full'>
          <button type='submit' className='text-[15px] text-[#ffffff] bg-[#ea660b] px-6 py-[5px] rounded'>Log In</button>
          <Link to='/signup' className='text-[14px] text-[#ea660b] cursor-pointer'>Create Account?</Link>
        </div>
      </form>
      <Toaster />
    </div>
  )
}

export default index
