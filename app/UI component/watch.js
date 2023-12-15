"use client";
import React, { useState, useEffect } from 'react';
import TextDisplay from './parts/textDisplay';
import CircularColor from './parts/loading';

export default function Watch() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data here and set isLoading to false when done
  }, []);

  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md'>
      <div className='flex flex-row flex space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>
        <div>
          <div className='flex flex-start  border-b border-white text-xl font-bold'>ETC 1</div>
          <div className='flex flex-start whitespace-nowrap'>Plant 1 Cargo Lift</div>
        </div>

        <div>
          <div>{isLoading ? <CircularColor /> : <TextDisplay />}</div>
        </div>

      </div>
    </div>
  )
}