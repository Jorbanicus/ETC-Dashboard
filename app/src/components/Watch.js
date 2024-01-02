"use client";
import React, { useState, useEffect } from 'react';
import TextDisplay from './parts/TextDisplay';
import LiveIcon from './parts/LiveIcon';
import FailIcon from './parts/FailIcon';
import LoadingIcon from './parts/LoadingIcon';

export default function Watch({ title, description }) {
  const [isLoading, setIsLoading] = useState(true);
  const [lastValue, setLastValue] = useState(null);
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:3001/')
        .then(response => response.text())
        .then(data => {
          if (data !== lastValue) {
            setLastValue(data);
            setLastUpdateTime(Date.now());
            setIsLoading(false);
          } else if (Date.now() - lastUpdateTime > 7 * 60 * 1000) {
            setIsLoading(true);
          }
        })
        .catch(error => {
          console.error('Fetch Error:', error);
          setIsLoading(false);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Removed [lastValue, lastUpdateTime]

  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md items-center'>
      <div className='flex flex-row space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>
        <div style={{ width: '130px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className='flex flex-start border-b border-white text-xl font-bold'>{title}</div>
          <div className='flex flex-start whitespace-nowrap'>{description}</div>
        </div>
        <div className='flex flex-row justify-center items-center space-x-2'>
          <TextDisplay text={lastValue} /> {/* Always show TextDisplay */}
          {isLoading ? <FailIcon /> : 
            (lastValue && Date.now() - lastUpdateTime <= 7 * 60 * 1000) ? <LiveIcon /> : <FailIcon />}
        </div>
      </div>
    </div>
  );
}