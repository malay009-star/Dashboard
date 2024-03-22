import React from 'react'
import { useFormik } from 'formik'
import { ClientSchema } from '../../Component/ClientSchema'
import toast, { Toaster } from 'react-hot-toast';
import './client.css'

const initialValues = {
  name: '',
  email: '',
  address: '',
  postalCode: '',
  city: '',
  phone1: '',
  phone2: '',
}

function index() {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: ClientSchema,
    onSubmit: (values ,{resetForm }) => {
      toast.success('Client info sended')
      resetForm();
    },
  })

  return (
    <div className='container flex justify-center pt-10'>
      <form onSubmit={handleSubmit} className='w-full md:w-[50%] lg:w-[50%] primary_shadow px-6 pt-6 pb-7 rounded-md mb-8'>
      <h3 className='text-[21px] sm:text-[23px] font-medium'>Client Information</h3>
        <div className='flex flex-col gap-y-8 mt-3'>
          <div className=''>
            <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full text-[#303030]'
              type='text'
              name='name'
              autoComplete='off'
              id='name'
              placeholder='Your Name'
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (<p className='text-[#DB4444] text-sm'>{errors.name}</p>) : null}
          </div>
          <div className=''>
            <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full text-[#303030]'
              type='email'
              name='email'
              autoComplete='off'
              id='email'
              placeholder='Your Email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (<p className='text-[#DB4444] text-sm'>{errors.email}</p>) : null}
          </div>
          <div className=''>
            <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full text-[#303030]'
              type='text'
              name='address'
              autoComplete='off'
              id='address'
              placeholder='Your Address'
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address ? (<p className='text-[#DB4444] text-sm'>{errors.address}</p>) : null}
          </div>
          <div className=''>
            <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full text-[#303030]'
              type='text'
              name='postalCode'
              autoComplete='off'
              id='postalCode'
              placeholder='Your PostalCode'
              value={values.postalCode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.postalCode && touched.postalCode ? (<p className='text-[#DB4444] text-sm'>{errors.postalCode}</p>) : null}
          </div>
          <div className=''>
            <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full text-[#303030]'
              type='text'
              name='city'
              autoComplete='off'
              id='city'
              placeholder='Your City'
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.city && touched.city ? (<p className='text-[#DB4444] text-sm'>{errors.city}</p>) : null}
          </div>
          <div className=''>
            <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full text-[#303030]'
              type='tel'
              name='phone1'
              autoComplete='off'
              id='phone1'
              placeholder='First Phone'
              value={values.phone1}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone1 && touched.phone1 ? (<p className='text-[#DB4444] text-sm'>{errors.phone1}</p>) : null}
          </div>
          <div className=''>
            <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full text-[#303030]'
              type='tel'
              name='phone2'
              autoComplete='off'
              id='phone2'
              placeholder='Second Phone'
              value={values.phone2}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.phone2 && touched.phone2 ? (<p className='text-[#DB4444] text-sm'>{errors.phone2}</p>) : null}
          </div>
        </div>
        <div className='flex justify-end mt-5'>
          <button type='submit' className='text-[15px] text-[#ffffff] bg-[#ea660b] px-5 py-[8px] rounded'>Send Client Info</button>
        </div>
      </form>
      <Toaster />
    </div>

  )
}

export default index
