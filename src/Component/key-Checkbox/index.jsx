import React, { useState } from 'react';

const KeyDetails = () => {
  const [willProvideKeys, setWillProvideKeys] = useState(false);

  const handleKeysCheckboxChange = () => {
    setWillProvideKeys(!willProvideKeys);
  };

  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="will_provide_keys"
          name="will_provide_keys"
          checked={willProvideKeys}
          onChange={handleKeysCheckboxChange}
          className='rounded'
        />
        {willProvideKeys ? <label htmlFor="will_provide_keys" className='text-[15px] ml-2'>Yes, I will provide keys</label>
          : <label htmlFor="will_provide_keys" className='text-[15px] ml-2'>Will Provide Keys?</label>}
      </div>
    </div>
  );
};

export default KeyDetails;
