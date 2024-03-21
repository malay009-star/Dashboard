import React, { useState } from 'react';
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaDog } from "react-icons/fa6";
import Profile from '../../Assets/images/profile.png'
import Malay from '../../Assets/images/maly.png'


const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="flex w-full flex-wrap sm:flex-nowrap h-[100%] md:h-[920px]">
      {/* Sidebar */}
      <div className="bg-gray-800 w-full sm:w-1/4">
        <div className="p-8 text-white">
          <h1 className="text-[22px] font-medium mb-4">Dashboard</h1>
          <ul className='flex flex-col gap-y-6'>
            <li
              className="cursor-pointer flex items-center gap-3"
              onClick={() => handleCategoryClick('clientDetails')}
            >
              <MdOutlineManageAccounts className='text-2xl' />
              <p className='text-sm hover:text-[#e2e2e2]'> Client Information</p>
            </li>
            <li
              className="cursor-pointer flex items-center gap-3"
              onClick={() => handleCategoryClick('DogInfo')}
            >
              <FaDog className='text-lg' />
              <p className='text-sm hover:text-[#e2e2e2]'>Dogs Information</p>
            </li>
            {/* <li
              className="cursor-pointer text-sm"
              onClick={() => handleCategoryClick('healthRecords')}
            >
              Health Records
            </li>
            <li
              className="cursor-pointer text-sm"
              onClick={() => handleCategoryClick('remindersAlerts')}
            >
              Reminders and Alerts
            </li>
            <li
              className="cursor-pointer text-sm"
              onClick={() => handleCategoryClick('emergencyInformation')}
            >
              Emergency Information
            </li>
            <li
              className="cursor-pointer text-sm"
              onClick={() => handleCategoryClick('behavioralInsights')}
            >
              Behavioral Insights
            </li> */}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className='w-full sm-w-3/4 p-6 md:p-7 bg-gray-100'>
        <div className="bg-[#ffffff] p-4 md:p-8 pb rounded">
          {activeCategory === 'clientDetails' && <ClientDetails />}
          {activeCategory === 'DogInfo' && <DogsInfo />}
          {activeCategory === 'petsList' && <PetsList />}
          {activeCategory === 'healthRecords' && <HealthRecords />}
          {activeCategory === 'remindersAlerts' && <RemindersAlerts />}
          {activeCategory === 'emergencyInformation' && <EmergencyInformation />}
          {activeCategory === 'behavioralInsights' && <BehavioralInsights />}
        </div>
      </div>
    </div>
  );
};




const ClientDetails = () => {
  return (
    <div>
      <h1 className="text-[22px] pb-1 border-b font-semibold">Client Information</h1>
      <div className='mt-4'>
        <p className='text-[18px] font-medium'>Profile picture change</p>
        <div className='flex items-center gap-3 mt-3'>
         <div className='w-20 h-20'><img className='w-[100%] h-[100%] bg-red-500 rounded-full' src={Profile} alt="" /></div>
          <button className='border px-3 py-1 rounded'>Change</button>
          <button className='border px-3 py-1 rounded bg-gray-100'>Remove</button>
        </div>
      </div>
      <div className='w-full pt-3 mt-6 border-t'>
        <form className='w-full  pt-6 pb-7 rounded-md'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className=''>
            <label htmlFor="dog_name" className='text-[15px]'>Name:</label>
              <input className='font-light text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='name'
                autoComplete='off'
                id='name'
                // placeholder='Your Name'
              />
            </div>
            <div className=''>
            <label htmlFor="dog_name" className='text-[15px]'>Email:</label>
              <input className='font-light text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='email'
                name='email'
                autoComplete='off'
                id='email'
                // placeholder='Your Email'
              />
            </div>
            <div className=''>
            <label htmlFor="dog_name" className='text-[15px]'>Address:</label>
              <input className='font-light text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='address'
                autoComplete='off'
                id='address'
                // placeholder='Your Address'
              />
            </div>
            <div className=''>
            <label htmlFor="dog_name" className='text-[15px]'>Postal Code:</label>
              <input className='font-light text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='postalCode'
                autoComplete='off'
                id='postalCode'
                // placeholder='Your PostalCode'
              />
            </div>
            <div className=''>
            <label htmlFor="dog_name" className='text-[15px]'>Your City:</label>
              <input className='font-light text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='text'
                name='city'
                autoComplete='off'
                id='city'
                // placeholder='Your City'
              />
            </div>
            <div className=''>
            <label htmlFor="dog_name" className='text-[15px]'>Phone1:</label>
              <input className='font-light text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='tel'
                name='phone1'
                autoComplete='off'
                id='phone1'
                // placeholder='First Phone'
              />
            </div>
            <div className=''>
            <label htmlFor="dog_name" className='text-[15px]'>Phone2:</label>
              <input className='font-light text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-2 inline-block focus:outline-none w-full'
                type='tel'
                name='phone2'
                autoComplete='off'
                id='phone2'
                // placeholder='Second Phone'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};




const DogsInfo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dog Information</h1>
      <div className='w-full pt-5'>
        <form className='w-full pb-7 rounded-md'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=''>
              <label htmlFor="dog_name" className='text-[15px] text-[#303030]'>Name:</label>
              <input
                type="text"
                id="dog_name"
                name="dog_name"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_breed" className='text-[15px] text-[#303030]'>Breed:</label>
              <input
                type="text"
                id="dog_breed"
                name="dog_breed"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_coat" className='text-[15px] text-[#303030]'>Coat:</label>
              <input
                type="text"
                id="dog_coat"
                name="dog_coat"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_sex" className='text-[15px] text-[#303030]'>Sex:</label>
              <select
                id="dog_sex"
                name="dog_sex"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
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
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="microchip_number" className='text-[15px] text-[#303030]'>Microchip Number:</label>
              <input
                type="text"
                id="microchip_number"
                name="microchip_number"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="last_vaccination_date" className='text-[15px] text-[#303030]'>Last Vaccination Date:</label>
              <input
                type="date"
                id="last_vaccination_date"
                name="last_vaccination_date"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="medications" className='text-[15px] text-[#303030]'>Medications:</label>
              <input
                type="text"
                id="medications"
                name="medications"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="allergies" className='text-[15px] text-[#303030]'>Allergies:</label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                autoComplete='off'
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="behavior" className='text-[15px] text-[#303030]'>Behavior:</label>
              <textarea
                id="behavior"
                name="behavior"
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
            <div className=''>
              <label htmlFor="leash_behavior" className='text-[15px] text-[#303030]'>Leash Behavior:</label>
              <textarea
                id="leash_behavior"
                name="leash_behavior"
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
            <div className=''>
              <label htmlFor="additional_notes" className='text-[15px] text-[#303030]'>Additional Notes:</label>
              <textarea
                id="additional_notes"
                name="additional_notes"
                className='font-light bg-[#F5F5F5] rounded ps-3 pe-2 py-2 focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// const PetsList = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Pets ki List</h1>
//       {/* Render pets list here */}
//     </div>
//   );
// };

// const HealthRecords = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Health Records</h1>
//       {/* Render health records here */}
//     </div>
//   );
// };

// const RemindersAlerts = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Reminders and Alerts</h1>
//       {/* Render reminders and alerts here */}
//     </div>
//   );
// };

// const EmergencyInformation = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Emergency Information</h1>
//       {/* Render emergency information here */}
//     </div>
//   );
// };

// const BehavioralInsights = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">Behavioral Insights</h1>
//       {/* Render behavioral insights here */}
//     </div>
//   );
// };

export default Dashboard;
