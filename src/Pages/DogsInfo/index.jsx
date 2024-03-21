import React from 'react'
import { useFormik } from 'formik'
import { DogSchema } from '../../Component/DogShema'
import toast, { Toaster } from 'react-hot-toast';

const initialValues = {
  dog_name: '',
  dog_breed: '',
  dog_coat: '',
  dog_sex: '', // This can be 'Male' or 'Female'
  sterilized: false, // This can be true or false
  birthdate: null, // This should be a Date object or null
  microchip_number: '',
  last_vaccination_date: null, // This should be a Date object or null
  medications: '',
  allergies: '',
  behavior: '',
  leash_behavior: '',
  additional_notes: ''
};


function index() {

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: DogSchema,
    onSubmit: (values, {resetForm }) => {
      toast.success('Dog info sended')
      resetForm();
    },
  })

  return (
    <div className='container flex justify-center pt-10'>
      <form onSubmit={handleSubmit} className='w-full md:w-[50%] lg:w-[50%] primary_shadow px-6 pt-6 pb-7 rounded-md mb-8'>
        <h2 className='text-[22px] sm:text-[24px] font-medium'>Dog Information</h2>
        <div className='mt-4'>
          <label htmlFor="dog_name" className='text-[15px]'>Name:</label>
          <input
            type="text"
            id="dog_name"
            name="dog_name"
            autoComplete='off'
            value={values.dog_name}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.dog_name && touched.dog_name ? (<p className='text-[#DB4444] text-sm'>{errors.dog_name}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="dog_breed" className='text-[15px]'>Breed:</label>
          <input
            type="text"
            id="dog_breed"
            name="dog_breed"
            autoComplete='off'
            value={values.dog_breed}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.dog_breed && touched.dog_breed ? (<p className='text-[#DB4444] text-sm'>{errors.dog_breed}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="dog_coat" className='text-[15px]'>Coat:</label>
          <input
            type="text"
            id="dog_coat"
            name="dog_coat"
            autoComplete='off'
            value={values.dog_coat}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.dog_coat && touched.dog_coat ? (<p className='text-[#DB4444] text-sm'>{errors.dog_coat}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="dog_sex" className='text-[15px]'>Sex:</label>
          <select
            id="dog_sex"
            name="dog_sex"
            value={values.dog_sex}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete='off'
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          >
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
          {errors.dog_sex && touched.dog_sex ? (<p className='text-[#DB4444] text-sm'>{errors.dog_sex}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="sterilized" className='text-[15px]'>Sterilized: &nbsp;</label>
          <input
            type="checkbox"
            id="sterilized"
            name="sterilized"
            value={values.sterilized}
            onChange={handleChange}
            onBlur={handleBlur}
            className='mt-2'
          />
          {errors.sterilized && touched.sterilized ? (<p className='text-[#DB4444] text-sm'>{errors.sterilized}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="birthdate" className='text-[15px]'>Birthdate:</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            autoComplete='off'
            value={values.birthdate}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.birthdate && touched.birthdate ? (<p className='text-[#DB4444] text-sm'>{errors.birthdate}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="microchip_number" className='text-[15px]'>Microchip Number:</label>
          <input
            type="text"
            id="microchip_number"
            name="microchip_number"
            autoComplete='off'
            value={values.microchip_number}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.microchip_number && touched.microchip_number ? (<p className='text-[#DB4444] text-sm'>{errors.microchip_number}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="last_vaccination_date" className='text-[15px]'>Last Vaccination Date:</label>
          <input
            type="date"
            id="last_vaccination_date"
            name="last_vaccination_date"
            autoComplete='off'
            value={values.last_vaccination_date}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.last_vaccination_date && touched.last_vaccination_date ? (<p className='text-[#DB4444] text-sm'>{errors.last_vaccination_date}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="medications" className='text-[15px]'>Medications:</label>
          <input
            type="text"
            id="medications"
            name="medications"
            autoComplete='off'
            value={values.medications}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.medications && touched.medications ? (<p className='text-[#DB4444] text-sm'>{errors.medications}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="allergies" className='text-[15px]'>Allergies:</label>
          <input
            type="text"
            id="allergies"
            name="allergies"
            autoComplete='off'
            value={values.allergies}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          />
          {errors.allergies && touched.allergies ? (<p className='text-[#DB4444] text-sm'>{errors.allergies}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="behavior" className='text-[15px]'>Behavior:</label>
          <textarea
            id="behavior"
            name="behavior"
            // placeholder='Behavior'
            value={values.behavior}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          ></textarea>
          {errors.behavior && touched.behavior ? (<p className='text-[#DB4444] text-sm'>{errors.behavior}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="leash_behavior" className='text-[15px]'>Leash Behavior:</label>
          <textarea
            id="leash_behavior"
            name="leash_behavior"
            // placeholder='Leash Behavior'
            value={values.leash_behavior}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          ></textarea>
          {errors.leash_behavior && touched.leash_behavior ? (<p className='text-[#DB4444] text-sm'>{errors.leash_behavior}</p>) : null}
        </div>
        <div className='mt-4'>
          <label htmlFor="additional_notes" className='text-[15px]'>Additional Notes:</label>
          <textarea
            id="additional_notes"
            name="additional_notes"
            // placeholder='Additional Notes'
            value={values.additional_notes}
            onChange={handleChange}
            onBlur={handleBlur}
            className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
          ></textarea>
          {errors.additional_notes && touched.additional_notes ? (<p className='text-[#DB4444] text-sm'>{errors.additional_notes}</p>) : null}
        </div>
        <div className='flex justify-end mt-5'>
          <button type='submit' className='font-light text-[15px] text-[#ffffff] hover:bg-[#c54b4b] bg-[#DB4444] px-6 py-[8px] rounded'>Send Dogs Info</button>
        </div>
      </form>
      <Toaster />
    </div>

  )
}

export default index
