import * as Yup from 'yup';

export const ClientSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email().required('please enter email'),
  address: Yup.string().required('Address is required'),
  postalCode: Yup.string().required('Postal Code is required'),
  city: Yup.string().required('City is required'),
  phone1: Yup.string()
    .matches(/^[0-9]+$/, 'only numbers required')
    .min(10, 'at least 10 digits')
    .max(15, 'at most 15 digits')
    .required('Phone is required')
  ,
  phone2: Yup.string()
  .matches(/^[0-9]+$/, 'only numbers required')
  .min(10, 'at least 10 digits')
  .max(15, 'at most 15 digits')
  .required('Phone is required')

});





// export const ConteactSchema = Yup.object({
//   name: Yup.string().min(2).max(25).required('please enter your name'),
//   email: Yup.string().email().required('please enter email'),
//   phone: Yup.string()
//     .matches(/^[0-9]+$/, 'Must be only digits')
//     .min(10, 'Must be at least 10 digits')
//     .max(15, 'Must be at most 15 digits')
//     .required('enter a valid phone'),
//   description: Yup.string()
//     .min(10, 'Must be at least 10 characters')
//     .max(500, 'Must be at most 500 characters')
//     .required('Please enter a description'),
// })

