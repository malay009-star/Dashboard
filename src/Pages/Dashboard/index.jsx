import React, { useState } from 'react';
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaDog } from "react-icons/fa6";
import ClientImgUpload from '../../Component/Client-Uploadimg'  
import Checkbox from '../../Component/key-Checkbox'

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('clientDetails');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap h-[100%]">
      {/* Sidebar */}
      <div className="bg-[#ea660b] w-full md:w-1/4 md:h-screen md:overflow-y-auto md:fixed">
        <div className="p-8 md:p-4 lg:p-8 text-white">
          <h1 className="text-[20px] sm:text-[22px] font-semibold mb-4">Dashboard</h1>
          <ul className='flex flex-col gap-y-6'>
            <li
              className="cursor-pointer flex items-center gap-2"
              onClick={() => handleCategoryClick('clientDetails')}
            >
              <MdOutlineManageAccounts className='text-2xl lg:text-[24px]' />
              <p className='text-[15.7px] hover:ps-1 transition-all ease-in-out duration-300'> Client Information</p>
            </li>
            <li
              className="cursor-pointer flex items-center gap-2"
              onClick={() => handleCategoryClick('dogInformation')}
            >
              <FaDog className='text-[19px]' />
              <p className='text-[15.7px] hover:ps-1 transition-all ease-in-out duration-300'>Dogs Information</p>
            </li>
          </ul>
        </div>
      </div>
      {/* Content */}
      <div className='w-full sm-w-3/4 p-6 md:p-7 bg-gray-100 md:ms-[25%] md:overflow-y-auto'>
        <div className="bg-[#ffffff] p-4 md:p-8 pb rounded">
          {activeCategory === 'clientDetails' && <ClientDetails />}
          {activeCategory === 'dogInformation' && <DogsInformation />}
          {activeCategory === 'checkbox' && < Checkbox />}
        </div>
      </div>
    </div>
  );
};






const ClientDetails = () => {
  return (
    <div>
      <h1 className="text-[20px] sm:text-[22px] pb-1 border-b font-semibold">Client Information</h1>
      <div className="mt-4">
        <label htmlFor="dog_image" className='text-[16px] font-medium'>Upload Profile Image</label>
        <ClientImgUpload />
      </div>
      <div className='w-full pb-5 pt-7 mt-4'>
        <form className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px]'>Name:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='name'
                autoComplete='off'
                id='name'
              // placeholder='Your Name'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px]'>Email:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='email'
                name='email'
                autoComplete='off'
                id='email'
              // placeholder='Your Email'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px]'>Address:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='address'
                autoComplete='off'
                id='address'
              // placeholder='Your Address'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px]'>Postal Code:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='postalCode'
                autoComplete='off'
                id='postalCode'
              // placeholder='Your PostalCode'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px]'>Your City:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='city'
                autoComplete='off'
                id='city'
              // placeholder='Your City'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px]'>Phone1:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='tel'
                name='phone1'
                autoComplete='off'
                id='phone1'
              // placeholder='First Phone'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px]'>Phone2:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='tel'
                name='phone2'
                autoComplete='off'
                id='phone2'
              // placeholder='Second Phone'
              />
            </div>
            <div className='flex items-center'><Checkbox /></div>
          </div>
        </form>
      </div>
    </div>
  );
};



const DogsInformation = () => {
  return (
    <div>
      <h1 className="text-[20px] sm:text-[22px] font-semibold">Dog Information</h1>
      <div className="mt-2">
        <label htmlFor="dog_image" className='text-[16px] font-medium'>Upload Profile Image</label>
        <ClientImgUpload />
      </div>
      <div className='w-full mt-9'>
        <form className='w-full pb-7 rounded-md'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px] text-[#303030]'>Name:</label>
              <input
                type="text"
                id="dog_name"
                name="dog_name"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_breed" className='text-[15px] text-[#303030]'>Breed:</label>
              <input
                type="text"
                id="dog_breed"
                name="dog_breed"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_coat" className='text-[15px] text-[#303030]'>Coat:</label>
              <input
                type="text"
                id="dog_coat"
                name="dog_coat"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_sex" className='text-[15px] text-[#303030]'>Sex:</label>
              <select
                id="dog_sex"
                name="dog_sex"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              >
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div className='flex items-center'>
              <label htmlFor="sterilized" className='text-[15px] text-[#303030]'>Sterilized: &nbsp;</label>
              <input
                type="checkbox"
                id="sterilized"
                name="sterilized"
                className='w-[11px]'
              />
            </div>
            <div className=''>
              <label htmlFor="birthdate" className='text-[15px] text-[#303030]'>Birthdate:</label>
              <input
                type="date"
                id="birthdate"
                name="birthdate"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="microchip_number" className='text-[15px] text-[#303030]'>Microchip Number:</label>
              <input
                type="text"
                id="microchip_number"
                name="microchip_number"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="last_vaccination_date" className='text-[15px] text-[#303030]'>Last Vaccination Date:</label>
              <input
                type="date"
                id="last_vaccination_date"
                name="last_vaccination_date"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="medications" className='text-[15px] text-[#303030]'>Medications:</label>
              <input
                type="text"
                id="medications"
                name="medications"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="allergies" className='text-[15px] text-[#303030]'>Allergies:</label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="behavior" className='text-[15px] text-[#303030]'>Behavior:</label>
              <textarea
                id="behavior"
                name="behavior"
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
            <div className=''>
              <label htmlFor="leash_behavior" className='text-[15px] text-[#303030]'>Leash Behavior:</label>
              <textarea
                id="leash_behavior"
                name="leash_behavior"
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
            <div className=''>
              <label htmlFor="additional_notes" className='text-[15px] text-[#303030]'>Additional Notes:</label>
              <textarea
                id="additional_notes"
                name="additional_notes"
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};



export default Dashboard;
