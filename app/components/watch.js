"use client";

import React from 'react';
import TextDisplay from './textDisplay';

export default function Watch() {
  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md'>
      <div className='flex flex-col border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>
        <div className='flex flex-start border-b border-white text-xl font-bold'>
          ETC 1
        </div>
        <div className='flex flex-start whitespace-nowrap'>
          Plant 1 Cargo Lift
        </div>
      </div>

      <div className='flex flex-col pl-0 pt-2 md:pt-0'>
        
        <div className='flex'>
          <img className='mr-1' src='/lastrefreshedclock.svg' />
          <p className='text-[#FFA500] text-sm'>Last Refreshed</p>
        </div>

        <div className='text-white font-bold text-3xl'>
          <TextDisplay/>
        </div>
      </div>
    </div>
  )
}
