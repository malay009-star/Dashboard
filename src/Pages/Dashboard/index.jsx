import React, { useState } from 'react';
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaDog } from "react-icons/fa6";
import ClientImgUpload from '../../Component/Choosefile'
import Keycheckbox from '../../Component/key-Checkbox'
import { TbBrandBooking } from "react-icons/tb";

const Dashboard = () => {
  const [activeCategory, setActiveCategory] = useState('clientDetails');

  const [regularWalks, setRegularWalks] = useState([]);
  const [specializedWalks, setSpecializedWalks] = useState([]);
  const [dayCare, setDayCare] = useState([]);
  const [boardingDogs, setBoardingDogs] = useState([]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };


  const addRegularWalkBooking = (type) => {
    const newBooking = {
      type: 'regular',
      time: 'Morning',
      maxDogs: 6,
      maxDistance: '1 km radius',
    };
    const checkitemsexist = regularWalks.some((item) => item.type === 'regular')
    if (!checkitemsexist) {
      setRegularWalks([...regularWalks, newBooking]);
    }
    setActiveCategory(type);
  };


  const addSpecializedWalkBooking = (type) => {
    const newBooking = {
      type: 'specialized',
      time: 'Morning',
      maxDogs: 3,
      maxDistance: 'Efficient routing based on distance',
    };
    const checkitemsexist = specializedWalks.some((item) => item.type === 'specialized')
    if (!checkitemsexist) {
      setSpecializedWalks([...specializedWalks, newBooking]);
    }
    setActiveCategory(type);
  };


  const addDayCareBooking = (type) => {
    const newBooking = {
      type: 'daycare',
      dropOff: '8-9 AM',
      pickUp: 'Before 6 PM',
      maxDogs: 5,
      guaranteedWalks: ['Morning', 'Noon/Afternoon'],
    };
    const checkitemsexist = dayCare.some((item) => item.type === 'daycare')
    if (!checkitemsexist) {
      setDayCare([...dayCare, newBooking]);
    }
    setActiveCategory(type);
  };


  const addBoardingDogBooking = (type) => {
    const newBooking = {
      type: 'boarding',
      maxDogs: 5,
      guaranteedWalks: ['Morning', 'Afternoon'],
    };
    const checkitemsexist = boardingDogs.some((item) => item.type === 'boarding')
    if (!checkitemsexist) {
      setBoardingDogs([...boardingDogs, newBooking]);
    }
    setActiveCategory(type);
  };



  return (
    <div className="flex w-full flex-wrap md:flex-nowrap h-[100%]">
      {/* Sidebar */}
      <div className="bg-[#ea660b] w-full md:w-1/4 md:h-screen md:overflow-y-auto md:fixed">
        <div className="p-8 md:p-4 lg:p-8 text-white">
          <h1 className="text-[20px] font-semibold mb-4">Dashboard</h1>
          <ul className='flex flex-col gap-y-6'>
            <li
              className="cursor-pointer flex items-center gap-2"
              onClick={() => handleCategoryClick('clientDetails')}
            >
              <MdOutlineManageAccounts className='text-2xl lg:text-[20px]' />
              <p className='text-[14px] hover:ps-1 transition-all ease-in-out duration-300'> Client Information</p>
            </li>
            <li
              className="cursor-pointer flex items-center gap-2"
              onClick={() => handleCategoryClick('dogInformation')}
            >
              <FaDog className='text-[15px]' />
              <p className='text-[14px] hover:ps-1 transition-all ease-in-out duration-300'>Dogs Information</p>
            </li>
            <li
              className="cursor-pointer flex items-center gap-2"
              onClick={() => handleCategoryClick('bookingsystem')}
            >
              <TbBrandBooking className='text-[18px]' />
              <p className='text-[14px] hover:ps-1 transition-all ease-in-out duration-300'>Dog Booking System</p>
            </li>
            <li className="cursor-pointer flex items-center gap-2 text-[14px]" onClick={() => addRegularWalkBooking('regular')} >
              Book Regular Walk</li>
            <li className="cursor-pointer flex items-center gap-2 text-[14px]" onClick={() => addSpecializedWalkBooking('specialized')} >
              Book Specialized Walk</li>
            <li className="cursor-pointer flex items-center gap-2 text-[14px]" onClick={() => addDayCareBooking('daycare')} >
              Book Day Care</li>
            <li className="cursor-pointer flex items-center gap-2 text-[14px]" onClick={() => addBoardingDogBooking('boarding')} >
              Book Boarding Dog</li>
          </ul>
        </div>
      </div>
      {/* Content */}
      <div className='w-full sm-w-3/4 p-6 md:p-7 bg-gray-100 md:ms-[25%] md:overflow-y-auto'>
        <div className="bg-[#ffffff] p-4 md:p-8 pb rounded">
          {activeCategory === 'clientDetails' && <ClientDetails />}
          {activeCategory === 'dogInformation' && <DogsInformation />}
          {activeCategory === 'bookingsystem' &&
            <div>
              {/* <ul>
                {regularWalks.map((booking, index) => (
                  <li key={index}>
                    Regular Walk - Time: {booking.time}, Max Dogs: {booking.maxDogs}, Max Distance: {booking.maxDistance}
                  </li>
                ))}
                {specializedWalks.map((booking, index) => (
                  <li key={index}>
                    Specialized Walk - Time: {booking.time}, Max Dogs: {booking.maxDogs}, Routing: {booking.maxDistance}
                  </li>
                ))}
                {dayCare.map((booking, index) => (
                  <li key={index}>
                    Day Care - Drop-off: {booking.dropOff}, Pick-up: {booking.pickUp}, Max Dogs: {booking.maxDogs}, Guaranteed Walks: {booking.guaranteedWalks.join(', ')}
                  </li>
                ))}
                {boardingDogs.map((booking, index) => (
                  <li key={index}>
                    Boarding Dog - Max Dogs: {booking.maxDogs}, Guaranteed Walks: {booking.guaranteedWalks.join(', ')}
                  </li>
                ))}
              </ul> */}
              <p><span className='font-medium'>Regular Walk -</span> <br/> Time: Morning, Max Dogs: 6, Max Distance: 1 km radius <br/><br/>
                <span className='font-medium'>Specialized Walk -</span> <br/> Time: Morning, Max Dogs: 3, Routing: Efficient routing based on distance <br/><br/>
                <span className='font-medium'>Day Care -</span> <br/> Drop-off: 8-9 AM, Pick-up: Before 6 PM, Max Dogs: 5, Guaranteed Walks: Morning, Noon/Afternoon <br/><br/>
                <span className='font-medium'>Boarding Dog -</span> <br/> Max Dogs: 5, Guaranteed Walks: Morning, Afternoon</p>
            </div>}

          {activeCategory === 'regular' && <ul>
            {regularWalks.map((booking, index) => (
              <li key={index}>
                <h3 className='text-[16px] font-medium'>Regular Walk -</h3>
                <h5 className='font-medium text-[14px]'>Time: {booking.time}</h5>
                <p className='text-[13px]'> , Max Dogs: {booking.maxDogs}, &nbsp; &nbsp; Max Distance: {booking.maxDistance}</p>
              </li>
            ))}
          </ul>}

          {activeCategory === 'specialized' && <ul>
            {specializedWalks.map((booking, index) => (
              <li key={index}>
                <h3 className='text-[16px] font-medium'>Specialized Walk - </h3>
                <h5 className='font-medium text-[14px]'>Time: {booking.time},</h5>
                <p className='text-[13px]'> Max Dogs: {booking.maxDogs}, &nbsp; &nbsp; Routing: {booking.maxDistance}</p>
              </li>
            ))}
          </ul>}

          {activeCategory === 'daycare' && <ul>
            {dayCare.map((booking, index) => (
              <li key={index}>
                <h3 className='text-[16px] font-medium'>Day Care - </h3>
                <h5 className='font-medium text-[14px]'>Drop-off: &nbsp; {booking.dropOff},</h5>
                <p className='text-[13px]'>Pick-up: {booking.pickUp}, &nbsp; &nbsp; Max Dogs: {booking.maxDogs}, Guaranteed Walks: {booking.guaranteedWalks.join(', ')}</p>
              </li>
            ))}
          </ul>}

          {activeCategory === 'boarding' && <ul>
            {boardingDogs.map((booking, index) => (
              <li key={index}>
                <h3 className='text-[16px] font-medium'>Boarding Dog -</h3>
                <h5 className='font-medium text-[14px]'> Max Dogs: {booking.maxDogs},</h5>
                <p className='text-[13px]'> &nbsp; Guaranteed Walks: {booking.guaranteedWalks.join(', ')}</p>
              </li>
            ))}
          </ul>}


        </div>
      </div>
    </div>
  );
};





const ClientDetails = () => {
  return (
    <div>
      <h1 className="text-[20px] pb-1 border-b font-semibold">Client Information</h1>
      <div className="mt-4">
        <label htmlFor="dog_image" className='text-[15px] font-medium'>Upload Profile Image</label>
        <ClientImgUpload />
      </div>
      <div className='w-full pb-5 pt-7 mt-4'>
        <form className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className=''>
              <label htmlFor="dog_name" className='text-[14px]'>Name:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-[5px] inline-block focus:outline-none w-full'
                type='text'
                name='name'
                autoComplete='off'
                id='name'
              // placeholder='Your Name'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[14px]'>Email:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-[5px] inline-block focus:outline-none w-full'
                type='email'
                name='email'
                autoComplete='off'
                id='email'
              // placeholder='Your Email'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[14px]'>Address:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-[5px] inline-block focus:outline-none w-full'
                type='text'
                name='address'
                autoComplete='off'
                id='address'
              // placeholder='Your Address'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[14px]'>Postal Code:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-[5px] inline-block focus:outline-none w-full'
                type='text'
                name='postalCode'
                autoComplete='off'
                id='postalCode'
              // placeholder='Your PostalCode'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[14px]'>Your City:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-[5px] inline-block focus:outline-none w-full'
                type='text'
                name='city'
                autoComplete='off'
                id='city'
              // placeholder='Your City'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[14px]'>Phone1:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-[5px] inline-block focus:outline-none w-full'
                type='tel'
                name='phone1'
                autoComplete='off'
                id='phone1'
              // placeholder='First Phone'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_name" className='text-[14px]'>Phone2:</label>
              <input className='text-[15px] bg-[#F5F5F5] rounded ps-3 pe-2 py-[5px] inline-block focus:outline-none w-full'
                type='tel'
                name='phone2'
                autoComplete='off'
                id='phone2'
              // placeholder='Second Phone'
              />
            </div>
            <div className='flex items-center'><Keycheckbox /></div>
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
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_breed" className='text-[15px] text-[#303030]'>Breed:</label>
              <input
                type="text"
                id="dog_breed"
                name="dog_breed"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_coat" className='text-[15px] text-[#303030]'>Coat:</label>
              <input
                type="text"
                id="dog_coat"
                name="dog_coat"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="dog_sex" className='text-[15px] text-[#303030]'>Sex:</label>
              <select
                id="dog_sex"
                name="dog_sex"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              >
                <option className='text-[11px]' value='male'>Male</option>
                <option className='text-[11px]' value='female'>Female</option>
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
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="microchip_number" className='text-[15px] text-[#303030]'>Microchip Number:</label>
              <input
                type="text"
                id="microchip_number"
                name="microchip_number"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="last_vaccination_date" className='text-[15px] text-[#303030]'>Last Vaccination Date:</label>
              <input
                type="date"
                id="last_vaccination_date"
                name="last_vaccination_date"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="medications" className='text-[15px] text-[#303030]'>Medications:</label>
              <input
                type="text"
                id="medications"
                name="medications"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="allergies" className='text-[15px] text-[#303030]'>Allergies:</label>
              <input
                type="text"
                id="allergies"
                name="allergies"
                autoComplete='off'
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              />
            </div>
            <div className=''>
              <label htmlFor="behavior" className='text-[15px] text-[#303030]'>Behavior:</label>
              <textarea
                id="behavior"
                name="behavior"
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
            <div className=''>
              <label htmlFor="leash_behavior" className='text-[15px] text-[#303030]'>Leash Behavior:</label>
              <textarea
                id="leash_behavior"
                name="leash_behavior"
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
            <div className=''>
              <label htmlFor="additional_notes" className='text-[15px] text-[#303030]'>Additional Notes:</label>
              <textarea
                id="additional_notes"
                name="additional_notes"
                className='bg-[#F5F5F5] rounded ps-3 pe-2 py-[5.5px] focus:outline-none w-full text-[#303030]'
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};



// const DogBookingSystem = () => {
//   return (
//     <div>
//       {/* <h2 className='bg-red-300'>Dog Booking System</h2>
//       <button className='bg-yellow-400 mt-5' onClick={addRegularWalkBooking}>Book Regular Walk</button> <br />
//       <button className='bg-yellow-400 mt-5' onClick={addSpecializedWalkBooking}>Book Specialized Walk</button> <br />
//       <button className='bg-yellow-400 mt-5' onClick={addDayCareBooking}>Book Day Care</button> <br />
//       <button className='bg-yellow-400 mt-5' onClick={addBoardingDogBooking}>Book Boarding Dog</button> */}
//       <h3 className='mt-12'>Booked Services</h3>
//       <ul>
//         {regularWalks.map((booking, index) => (
//           <li key={index}>
//             Regular Walk - Time: {booking.time}, Max Dogs: {booking.maxDogs}, Max Distance: {booking.maxDistance}
//           </li>
//         ))}
//         {specializedWalks.map((booking, index) => (
//           <li key={index}>
//             Specialized Walk - Time: {booking.time}, Max Dogs: {booking.maxDogs}, Routing: {booking.maxDistance}
//           </li>
//         ))}
//         {dayCare.map((booking, index) => (
//           <li key={index}>
//             Day Care - Drop-off: {booking.dropOff}, Pick-up: {booking.pickUp}, Max Dogs: {booking.maxDogs}, Guaranteed Walks: {booking.guaranteedWalks.join(', ')}
//           </li>
//         ))}
//         {boardingDogs.map((booking, index) => (
//           <li key={index}>
//             Boarding Dog - Max Dogs: {booking.maxDogs}, Guaranteed Walks: {booking.guaranteedWalks.join(', ')}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


export default Dashboard;
