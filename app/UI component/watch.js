"use client";
import React, { useState, useEffect } from 'react';
import generateRandomText from './parts/livetextgen';
import LoadingIcon from './parts/loadingIcon';
import TextDisplay from './parts/textDisplay';

export default function Watch({ title, description }) {
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(true); 
  
  useEffect(() => {
    let textGenerationIntervalId;
    let checkOutputIntervalId;

    const updateText = async () => {
      setIsLoading(true);
      const newText = await generateRandomText();
      setTime(newText);
    };

    const checkOutput = () => {
      if (time) {
        setIsLoading(false);
      } else {
        setIsLoading(true);
      }
    };

    // Call updateText immediately on component mount
    updateText();

    // Then update the text every 2 minutes
    textGenerationIntervalId = setInterval(updateText, 30000); // 120000 ms = 2 minutes

    // Check for output every minute
    checkOutputIntervalId = setInterval(checkOutput, 15000); // 60000 ms = 1 minute

    // Clear intervals on component unmount
    return () => {
      clearInterval(textGenerationIntervalId);
      clearInterval(checkOutputIntervalId);
    };
  }, [time]);

  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md'>
      <div className='flex flex-row flex space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>

        <div style={{ width: '150px' }}>
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