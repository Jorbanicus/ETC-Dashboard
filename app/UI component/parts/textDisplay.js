"use client";

import React, { useEffect, useState } from 'react';

export default function TextDisplay () {
  const [date, setDate] = useState('');

  useEffect(() => {
    const filePath = 'test.txt';
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n');
        setDate(lines[0]);
      })
      .catch(error => {
        console.error('Error reading the file: ', error);
      });
  }, []);

  return (
    <div>
      <div className='flex'>
        <img className='mr-1' src='/lastrefreshedclock.svg' />
        <p className='text-[#FFA500] text-sm'>Last Refreshed</p>
      </div>
      <div className='flex'>
        <p className="text-white font-bold text-3xl">{date}</p>
      </div>
    </div>
  );
};