import React from 'react';

export default function TextDisplay ({ lastValue }) {
  console.log(lastValue);
  
  return (
    <div>
      <div className='flex'>
        <img className='mr-1' src='/lastrefreshedclock.svg' />
        <p className='text-[#FFA500] text-sm'>Last Refreshed</p>
      </div>
      <div className='flex'>
        <p className="text-white font-bold text-3xl">{lastValue}</p>
      </div>
    </div>
  );
};