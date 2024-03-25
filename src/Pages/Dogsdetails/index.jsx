import React, { useState } from 'react'
import { useFormik } from 'formik'
import { DogSchema } from '../../Component/Dogschema'
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

const breeds = [
  'Affenpinscher',
  'Afghan Hound',
  'Airedale Terrier',
  'Akita',
  'Alaskan Malamute',
  'American Bulldog',
  'American Cocker Spaniel',
  'American Pit Bull Terrier',
  'American Staffordshire Terrier',
  'Affenpinscher',
  'Afghan Hound',
  'Airedale Terrier',
  'Alaskan Malamute',
  'American Bulldog',
  'American Cocker Spaniel',
  'American Pit Bull Terrier',
  'American Staffordshire Terrier',
  'Australian Cattle Dog',
  ' Australian Shepherd',
  'Australian Terrier',
  'Basenji',
  'Basset Hound',
  'Beagle',
  'Bearded Collie',
  'Bedlington Terrier',
  'Belgian Malinois',
  'Belgian Sheepdog',
  'Belgian Tervuren',
  'Bernese Mountain Dog',
  'Bichon Frise',
  'Black and Tan Coonhound',
  'Bloodhound',
  'Border Collie',
  'Border Terrier',
  'Bouvier des Flandres',
  'Boxer',
  'Brittany',
  'Brittany',
  'Brussels Griffon',
  'Bull Terrier',
  'Bulldog',
  'Bullmastiff',
  'Cairn Terrier',
  'Cane Corso',
  'Cardigan Welsh Corgi',
  'Cavalier King Charles Spaniel',
  'Chesapeake Bay Retriever',
  'Chihuahua',
  'Chinese Crested',
  'Chinese Shar-Pei',
  'Chow Chow',
  'Clumber Spaniel',
  'Cockapoo',
  'Cocker Spaniel',
  'Collie',
  'Coonhound',
  'Corgi',
  'Coton de Tulear',
  'Curly-Coated Retriever',
  'Dachshund',
  'Dalmatian',
  'Dandie Dinmont Terrier',
  'Doberman Pinscher',
  'Dogue de Bordeaux',
  'Dutch Shepherd',
  'English Bulldog',
  'English Cocker Spaniel',
  'English Toy Spaniel',
  'Entlebucher Mountain Dog',
  'Eskimo Dog',
  'Field Spaniel',
  'Finnish Spitz',
  'Flat-Coated Retriever',
  'French Bulldog',
  'German Pinscher',
  'German Shepherd Dog',
  'German Shorthaired Pointer',
  'Giant Schnauzer',
  'Glen of Imaal Terrier',
  'Golden Retriever',
  'Glen of Imaal Terrier',
  'Golden Retriever',
  'Gordon Setter',
  'Great Dane',
  'Great Pyrenees',
  'Greater Swiss Mountain Dog',
  'Greyhound',
  'Harrier',
  'Havanese',
  'Irish Setter',
  'Irish Terrier',
  'Irish Water Spaniel',
  'Irish Wolfhound',
  'Italian Greyhound',
  'Jack Russell Terrier',
  'Japanese Chin',
  'Keeshond',
  'Kerry Blue Terrier',
  'King Charles Spaniel',
  'Komondor',
  'Kuvasz',
  'Labradoodle',
  'Labrador Retriever',
  'Lagotto Romagnolo',
  'Lakeland Terrier',
  'Lhasa Apso',
  'Maltese',
  'Manchester Terrier',
  'Maremma Sheepdog',
  'Mastiff',
  'Miniature Bull Terrier',
  'Miniature Pinscher',
  'Miniature Schnauzer',
  'Neapolitan Mastiff',
  'Newfoundland',
  'Norfolk Terrier',
  'Norwegian Buhund',
  'Norwegian Elkhound',
  'Norwegian Lundehund',
  'Norwich Terrier',
  'Nova Scotia Duck Tolling Retriever',
  'Old English Sheepdog',
  'Otterhound',
  'Papillon',
  'Pekingese',
  'Pembroke Welsh Corgi',
  'Pharaoh Hound',
  'Pit Bull',
  'Plott',
  'Pointer',
  'Polish Lowland Sheepdog',
  'Pomeranian',
  'Poodle (Standard, Miniature, Toy)',
  'Portuguese Water Dog',
  'Presa Canario',
  'Pug',
  'Puli',
  'Pumi',
  'Pyrenean Shepherd',
  'Rat Terrier',
  'Redbone Coonhound',
  'Rhodesian Ridgeback',
  'Rottweiler',
  'Saint Bernard',
  'Saluki',
  'Samoyed',
  'Schipperke',
  'Scottish Deerhound',
  'Scottish Terrier',
  'Sealyham Terrier',
  'Shetland Sheepdog',
  'Shiba Inu',
  'Shih Tzu',
  'Siberian Husky',
  'Silky Terrier',
  'Skye Terrier',
  'Sloughi',
  'Small Munsterlander Pointer',
  'Soft Coated Wheaten Terrier',
  'Spanish Water Dog',
  'Spinone Italiano',
  'Staffordshire Bull Terrier',
  'Standard Schnauzer',
  'Sussex Spaniel',
  'Swedish Vallhund',
  'Tibetan Mastiff',
  'Tibetan Spaniel',
  'Tibetan Terrier',
  'Tosa',
  'Toy Fox Terrier',
  'Treeing Walker Coonhound',
  'Vizsla',
  'Weimaraner',
  'Welsh Springer Spaniel',
  'Welsh Terrier',
  'West Highland White Terrier',
  'Whippet',
  'Wirehaired Pointing Griffon',

];


function index() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBreeds, setFilteredBreeds] = useState(breeds);


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: DogSchema,
    onSubmit: (values, { resetForm }) => {
      // toast.success('Dog info sended')
      resetForm();
    },
  })


  // const handleSearchChange = (e) => {
  //   const searchValue = e.target.value;
  //   setSearchTerm(searchValue);
  //   const filtered = breeds.filter(breed =>
  //     breed.toLowerCase().includes(searchValue.toLowerCase())
  //   );
  //   setFilteredBreeds(filtered);
  // };

  const handleBreedSelect = (e) => {
    const selectedBreed = e.target.value;
    setSearchTerm(''); // Clear search term
    setFilteredBreeds(breeds); // Reset filtered breeds to all breeds
    handleChange(e); // Handle change for formik
  };


  return (
    <div className='container flex justify-center pt-10'>
      <form onSubmit={handleSubmit} className='w-full lg:w-[70%] primary_shadow px-6 pt-6 pb-7 rounded-md mb-8'>
        <h2 className='text-[22px] font-medium'>Dog Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          <div className=''>
            <label htmlFor="dog_name" className='text-[14px]'>Name:</label>
            <input
              type="text"
              id="dog_name"
              name="dog_name"
              placeholder="Dog's name"
              autoComplete='off'
              value={values.dog_name}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            />
            {errors.dog_name && touched.dog_name ? (<p className='text-[#DB4444] text-sm'>{errors.dog_name}</p>) : null}
          </div>
          <div>
            <div className=''>
              <label htmlFor="dog_breed" className='text-[14px]'>Breed:</label>
              <select
                id="dog_breed"
                name="dog_breed"
                placeholder="Breed"
                autoComplete='off'
                className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
                onChange={handleBreedSelect}
                onBlur={handleBlur}
                value={values.dog_breed}
              >
                {filteredBreeds.map((breed, index) => (
                  <option key={index} value={breed}>{breed}</option>
                ))}
              </select>
            </div>
            {/* <div className='mt-2'>
              <input
                type="text"
                id="search_breed"
                name="search_breed"
                placeholder="Search breed"
                autoComplete='off'
                value={searchTerm}
                onChange={handleSearchChange}
                className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
              />
            </div> */}
          </div>
          <div className=''>
            <label htmlFor="dog_coat" className='text-[14px]'>Coat:</label>
            <input
              type="text"
              id="dog_coat"
              name="dog_coat"
              placeholder="Coat type"
              autoComplete='off'
              value={values.dog_coat}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            />
            {errors.dog_coat && touched.dog_coat ? (<p className='text-[#DB4444] text-sm'>{errors.dog_coat}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="dog_sex" className='text-[14px]'>Sex:</label>
            <select
              id="dog_sex"
              name="dog_sex"
              value={values.dog_sex}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete='off'
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
            {errors.dog_sex && touched.dog_sex ? (<p className='text-[#DB4444] text-sm'>{errors.dog_sex}</p>) : null}
          </div>
          <div className='flex items-center'>
            <label htmlFor="sterilized" className='text-[14px]'>Sterilized: &nbsp;</label>
            <input
              type="checkbox"
              id="sterilized"
              name="sterilized"
              value={values.sterilized}
              onChange={handleChange}
              onBlur={handleBlur}
              className='w-[12px] text-[14px]'
            />
            {errors.sterilized && touched.sterilized ? (<p className='text-[#DB4444] text-sm'>{errors.sterilized}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="birthdate" className='text-[14px]'>Birthdate:</label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              autoComplete='off'
              value={values.birthdate}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            />
            {errors.birthdate && touched.birthdate ? (<p className='text-[#DB4444] text-sm'>{errors.birthdate}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="microchip_number" className='text-[14px]'>Microchip Number:</label>
            <input
              type="text"
              id="microchip_number"
              name="microchip_number"
              placeholder="Microchip number"
              autoComplete='off'
              value={values.microchip_number}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            />
            {errors.microchip_number && touched.microchip_number ? (<p className='text-[#DB4444] text-sm'>{errors.microchip_number}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="last_vaccination_date" className='text-[14px]'>Last Vaccination Date:</label>
            <input
              type="date"
              id="last_vaccination_date"
              name="last_vaccination_date"
              autoComplete='off'
              value={values.last_vaccination_date}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            />
            {errors.last_vaccination_date && touched.last_vaccination_date ? (<p className='text-[#DB4444] text-sm'>{errors.last_vaccination_date}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="medications" className='text-[14px]'>Medications:</label>
            <input
              type="text"
              id="medications"
              name="medications"
              autoComplete='off'
              placeholder="Medications (if any)"
              value={values.medications}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            />
            {errors.medications && touched.medications ? (<p className='text-[#DB4444] text-sm'>{errors.medications}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="allergies" className='text-[14px]'>Allergies:</label>
            <input
              type="text"
              id="allergies"
              name="allergies"
              placeholder="Enter allergies (if any)"
              autoComplete='off'
              value={values.allergies}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            />
            {errors.allergies && touched.allergies ? (<p className='text-[#DB4444] text-sm'>{errors.allergies}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="behavior" className='text-[14px]'>Behavior:</label>
            <textarea
              id="behavior"
              name="behavior"
              placeholder="Behavior description"
              value={values.behavior}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            ></textarea>
            {errors.behavior && touched.behavior ? (<p className='text-[#DB4444] text-sm'>{errors.behavior}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="leash_behavior" className='text-[14px]'>Leash Behavior:</label>
            <textarea
              id="leash_behavior"
              name="leash_behavior"
              placeholder="Leach description"
              value={values.leash_behavior}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            ></textarea>
            {errors.leash_behavior && touched.leash_behavior ? (<p className='text-[#DB4444] text-sm'>{errors.leash_behavior}</p>) : null}
          </div>
          <div className=''>
            <label htmlFor="additional_notes" className='text-[14px]'>Additional Notes:</label>
            <textarea
              id="additional_notes"
              name="additional_notes"
              placeholder='Additional notes'
              value={values.additional_notes}
              onChange={handleChange}
              onBlur={handleBlur}
              className='bg-[#F5F5F5] text-[14px] rounded ps-3 pe-2 py-2 focus:outline-none w-full'
            ></textarea>
            {errors.additional_notes && touched.additional_notes ? (<p className='text-[#DB4444] text-sm'>{errors.additional_notes}</p>) : null}
          </div>
        </div>
        <div className='flex justify-end mt-5'>
          <button type='submit' className='font-light text-[14px] text-[#ffffff] bg-[#ea660b] px-6 py-[8px] rounded'>Save</button>
        </div>
      </form>
      <Toaster />
    </div>

  )
}

export default index
