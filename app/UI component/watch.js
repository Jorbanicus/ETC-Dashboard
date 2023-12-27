"use client";
import React, { useState, useEffect } from 'react';
import LoadingIcon from './parts/LoadingIcon';
import TextDisplay from './parts/TextDisplay';

export default function Watch({ title, description }) {
  const [lastValue, setLastValue] = useState(null);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('/API/readfile')
        .then(response => response.json())
        .then(data => {
          if (data.data !== lastValue) {
            setLastValue(data.data);
            setLastUpdateTime(Date.now());
            setIsLoading(true);
          } else if (Date.now() - lastUpdateTime > 7 * 60 * 1000) {
            setIsLoading(false);
          }
        })
        .catch(error => {
          console.error('Error reading the file: ', error);
        });
    }, 1000); // Check every second

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [lastValue, lastUpdateTime]);
  
  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md'>
      <div className='flex flex-row flex space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>

        <div style={{ width: '130px' }}>
          <div className='flex flex-start  border-b border-white text-xl font-bold'>{title}</div>
          <div className='flex flex-start whitespace-nowrap'>{description}</div>
        </div>

        <div>
          <div>{isLoading ? <LoadingIcon /> : <TextDisplay text={lastValue} />}</div>
        </div>

      </div>
    </div>
  );
}
