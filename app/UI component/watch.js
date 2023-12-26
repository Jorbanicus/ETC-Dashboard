"use client";
import React, { useState, useEffect } from 'react';
import generateRandomText from './livetextgen';
import LoadingIcon from './parts/loadingIcon';
import TextDisplay from './parts/textDisplay';

export default function Watch({ title, description }) {
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add this line
  
  useEffect(() => {
    setIsLoading(true);
    try {
      const newText = generateRandomText();
      setTime(newText);
    } catch (error) {
      console.error('Failed to generate text:', error);
    }
    setIsLoading(false);
  }, []);

  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md'>
      <div className='flex flex-row flex space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>

        <div>
          <div className='flex flex-start  border-b border-white text-xl font-bold'>{title}</div>
          <div className='flex flex-start whitespace-nowrap'>{description}</div>
        </div>

        <div>
          <div>{isLoading ? <LoadingIcon /> : <TextDisplay text={time} />}</div>
        </div>

      </div>
    </div>
  );
}

