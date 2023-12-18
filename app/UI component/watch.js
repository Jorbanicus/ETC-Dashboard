"use client";
import React, { useState, useEffect } from 'react';
import TextDisplay from './parts/textDisplay';
import LoadingIcon from './parts/loadingIcon';

const generateRandomText = require('./livetextgen');

export default function Watch({ title, description }) {
  const [isLoading, setIsLoading] = useState(true);
  const [lastGeneratedText, setLastGeneratedText] = useState('');

  useEffect(() => {
    // Fetch data here and set isLoading to false when done

    // Set up interval to check for new text every 2 minutes
    const intervalId = setInterval(() => {
      const newText = generateRandomText.getLastGeneratedText();
      if (newText) {
        setLastGeneratedText(newText);
        setIsLoading(false);
      }
    }, 120000); // 120000 milliseconds = 2 minutes

    // Stop the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex flex-col md:flex-row bg-black p-1 rounded-md'>
      <div className='flex flex-row flex space-x-4 border-l-4 rounded border-blue-500 text-white mr-3 pl-2'>

        <div>
          <div className='flex flex-start  border-b border-white text-xl font-bold'>{title}</div>
          <div className='flex flex-start whitespace-nowrap'>{description}</div>
        </div>

        <div>
          <div>{isLoading ? <LoadingIcon /> : <TextDisplay lastGeneratedText={lastGeneratedText} />}</div>
        </div>

      </div>
    </div>
  );
}

