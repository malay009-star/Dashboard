import React from 'react'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import * as Yup from 'yup';

export const SignUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required('please enter your name'),
  email: Yup.string().email().required('please enter email'),
  password: Yup.string().min(6).required('please enter password'),
})

const initialValues = {
  name: '',
  email: '',
  password: '',
}

function index() {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => {
      // toast.success('account updated successfully')
      resetForm();
    },
  })

  return (
      <div className='container flex justify-center pt-10'>
        <form onSubmit={handleSubmit} className='w-full md:w-[50%] primary_shadow px-6 pt-6 pb-10 rounded-md' action="">
          <h3 className='text-[21px] sm:text-[22px] font-medium'>Create an account</h3>
          <h5 className='text-[15px] sm:text-[14px] sm:mt-2'>Enter your details below</h5>
          <div className='mt-5 sm:mt-8' htmlFor=''>
            <input className='text-[14px] pb-1 inline-block border-b focus:outline-none w-full text-[#303030]'
              type='text'
              name='name'
              autoComplete='off'
              id='name'
              placeholder='Name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (<p className='text-[#DB4444] text-xs'>{errors.name}</p>) : null}
          </div><br />
          <div className='mt-1' htmlFor=''>
            <input className='text-[14px] pb-1 inline-block border-b focus:outline-none w-full text-[#303030]'
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
            <input className='text-[14px] pb-1 inline-block focus:outline-none border-b w-full text-[#000]'
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
          <button type='submit' className='text-[#ffffff] text-[14px] text-center bg-[#ea660b] inline-block w-full py-[7px] rounded mt-7'>Create Account</button>
          <button className='flex items-center justify-center border w-full mt-5 py-2 gap-2'>
            <FcGoogle className='text-[20px]'/>
            <p className='text-[14px]'>Sign up with Google</p>
          </button>
          <div className='flex items-center justify-evenly gap-x-3 mt-8 w-full'>
            <p className='text-[14px]'>Already have account?</p>
            <Link to='/login' className='text-[14px] border-b border-[#4d4d4d] hover:border-b-[#ea660b] hover:text-[#ea660b]'>Log in</Link>
          </div>
        </form>
        <Toaster />
      </div>
  )
}

export default index
