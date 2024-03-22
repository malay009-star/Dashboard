import React, { useState } from 'react';
import Profile from '../../Assets/images/profile.png'

const ClientImgUpload = () => {
  const [dogImage, setDogImage] = useState();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDogImage(URL.createObjectURL(file));
    }
    // else {
    //   setDogImage(Profile);
    // }
  };

  return (
    <div className='mt-3'>
      <div className='flex items-center gap-5 mt-4'>
        {dogImage && (
          <label className='w-20 h-20' htmlFor='dog_image'>
            <img src={dogImage} alt="Dog Preview" className="w-full h-[100%] rounded-[3rem]" />
          </label>
        )}
        {/* {!dogImage && (
          <label className='w-20 h-20 border border-gray-300 rounded-[3rem] bg-black text-white' htmlFor='dog_image'>
            <img src={Profile} alt="" />
          </label>
        )} */}
        <div>
          <input
            type="file"
            id="dog_image"
            name="dog_image"
            accept="image/*"
            onChange={handleImageUpload}
            className='hidden'
          />
          <label htmlFor="dog_image" className='bg-[#ea660b] px-[12px] py-[7px] text-[#ffffff] rounded'>Choose file</label>
        </div>
      </div>
    </div>
  );
};

export default ClientImgUpload;
