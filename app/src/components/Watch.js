"use client";
import React, { useState, useEffect } from 'react';
import TextDisplay from './parts/TextDisplay';
import LiveIcon from './parts/LiveIcon';
import FailIcon from './parts/FailIcon';

export default function Watch({ title, description, filePath }) {
  const [lastValue, setLastValue] = useState('');
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('useEffect triggered');
    const interval = setInterval(() => {
      console.log('Making fetch request');
      fetch(`http://localhost:3001/?filePath=${encodeURIComponent(filePath)}`) 
        .then(response => response.text()) 
        .then(data => {
          const newValue = data; 
          if (newValue !== lastValue) {
            setLastValue(newValue);
            setLastUpdateTime(Date.now());
            setIsLoading(false);
          } else if (Date.now() - lastUpdateTime > 7 * 60 * 1000) {
            setIsLoading(true);
          }

          // Log the state
          console.log('State:', {
            lastValue: newValue,
            lastUpdateTime: Date.now(),
            isLoading: newValue !== lastValue ? false : (Date.now() - lastUpdateTime > 7 * 60 * 1000)
          });
        })

        .catch(error => {
          console.error('Fetch Error:', error);
          setIsLoading(false);
        });
    }, 5000);

    return () => clearInterval(interval);
  }, [lastValue, lastUpdateTime, filePath]);

  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md items-center'>
      <div className='flex flex-row space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>
        <div style={{ width: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className='flex flex-start border-b border-white text-xl font-bold'>{title}</div>
          <div className='flex flex-start whitespace-nowrap'>{description}</div>
        </div>
        <div className='flex flex-row justify-center items-center space-x-2'>
          <TextDisplay data={lastValue} />
          {isLoading ? <FailIcon /> : 
            (lastValue && Date.now() - lastUpdateTime <= 7 * 60 * 1000) ? <LiveIcon /> : <FailIcon />}
        </div>
      </div>
    </div>
  );
}