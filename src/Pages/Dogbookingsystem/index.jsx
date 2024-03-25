import React, { useState } from 'react';

const DogBookingSystem = () => {
  // State variables to store bookings for different services
  const [regularWalks, setRegularWalks] = useState([]);
  const [specializedWalks, setSpecializedWalks] = useState([]);
  const [dayCare, setDayCare] = useState([]);
  const [boardingDogs, setBoardingDogs] = useState([]);

 
  const addRegularWalkBooking = () => {
    const newBooking = {
      type: 'regular',
      time: 'Morning',
      maxDogs: 6,
      maxDistance: '1 km radius',
    };

    const checkitemsexist = regularWalks.some((item) => item.type=== 'regular')
    if (!checkitemsexist) {
      setRegularWalks([...regularWalks, newBooking]);
    }

  };


  const addSpecializedWalkBooking = () => {
    const newBooking = {
      type: 'specialized',
      time: 'Morning',
      maxDogs: 3,
      maxDistance: 'Efficient routing based on distance',
    };

    const checkitemsexist = regularWalks.some((item) => item.type === 'specialized')
    if (!checkitemsexist) {
      setRegularWalks([...regularWalks, newBooking]);
    }
  };


  const addDayCareBooking = () => {
    const newBooking = {
      type: 'daycare',
      dropOff: '8-9 AM',
      pickUp: 'Before 6 PM',
      maxDogs: 5,
      guaranteedWalks: ['Morning', 'Noon/Afternoon'],
    };
    const checkitemsexist = regularWalks.some((item) => item.type === 'daycare')
    if (!checkitemsexist) {
      setRegularWalks([...regularWalks, newBooking]);
    }
  };

  

  const addBoardingDogBooking = () => {
    const newBooking = {
      type: 'boarding',
      maxDogs: 5,
      guaranteedWalks: ['Morning', 'Afternoon'],
    };
     const checkitemsexist = regularWalks.some((item) => item.type === 'boarding')
    if (!checkitemsexist) {
      setRegularWalks([...regularWalks, newBooking]);
    }
  };

  

  return (
    <div>
      {/* <h2 className='bg-red-300'>Dog Booking System</h2>
      <button className='bg-yellow-400 mt-5' onClick={addRegularWalkBooking}>Book Regular Walk</button> <br />
      <button className='bg-yellow-400 mt-5' onClick={addSpecializedWalkBooking}>Book Specialized Walk</button> <br />
      <button className='bg-yellow-400 mt-5' onClick={addDayCareBooking}>Book Day Care</button> <br />
      <button className='bg-yellow-400 mt-5' onClick={addBoardingDogBooking}>Book Boarding Dog</button> */}
      <h3 className='mt-12'>Booked Services</h3>
      <ul>
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
      </ul>
    </div>
  );
};

export default DogBookingSystem;
