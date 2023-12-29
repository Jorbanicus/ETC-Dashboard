"use client";
import React, { useState, useEffect } from 'react';
import TextDisplay from './parts/TextDisplay';
import LiveIcon from './parts/LiveIcon';
import FailIcon from './parts/LiveIcon';

export default function Watch({ title, description }) {
  const [lastValue, setLastValue] = useState(null);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const [serverUrl, setServerUrl] = useState('http://localhost:3000/api/read'); // Default to localhost

  useEffect(() => {
      const intervalId = setInterval(() => {
        fetch(serverUrl)
          .then(response => response.text())
          .then(data => {
            console.log(data);
            if (data !== lastValue) {
              setLastValue(data);
              setLastUpdateTime(Date.now());
              setIsLoading(false);
            } else if (Date.now() - lastUpdateTime > 7 * 60 * 1000) {
              setIsLoading(true);
            }
          })
          .catch(error => {
            console.error('Error reading the file: ', error);
          });
      }, 1000); // Check every second
  
      return () => clearInterval(intervalId); // Clean up on unmount
    }, [lastValue, lastUpdateTime, serverUrl]); // Add serverUrl to the dependency array
  
  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md items-center'>
      <div className='flex flex-row flex space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>

        <div style={{ width: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className='flex flex-start border-b border-white text-xl font-bold'>{title}</div>
          <div className='flex flex-start whitespace-nowrap'>{description}</div>
        </div>

        <div className='flex flex-col justify-center items-center space-y-2'>
          <TextDisplay lastValue={lastValue} />
          <LiveIcon/>
        </div>

      </div>
    </div>
  );
}
