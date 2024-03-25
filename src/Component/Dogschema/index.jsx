import * as Yup from 'yup';

export const DogSchema = Yup.object().shape({
  dog_name: Yup.string().required('Name is required'),
  dog_breed: Yup.string().required('Breed is required'),
  dog_coat: Yup.string('Coat is required'),
  dog_sex: Yup.string(),
  sterilized: Yup.boolean().required('Sterilized is required'),
  birthdate: Yup.date().required('Birthdate is required'),
  microchip_number: Yup.string('microchip not valid'),
  last_vaccination_date: Yup.date().required('vaccination date required'),
  medications: Yup.string().required('medication is required'),
  allergies: Yup.string().required('allergies is required'),
  behavior: Yup.string().required('behavior is required'),
  leash_behavior: Yup.string().required('leash behavior is required'),
  additional_notes: Yup.string().required('additional notes is required'),
});