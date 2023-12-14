import React, { useEffect, useState } from 'react';
import readTextFile from './readTextFile';

const TextDisplay = () => {
  const [date, setDate] = useState('');
  const [timing, setTiming] = useState('');

  useEffect(() => {
    const filePath = 'test.txt';
    readTextFile(filePath)
      .then((data) => {
        const lines = data.split('\n');
        setDate(lines[0]);
        setTiming(lines[1]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <p>Date: {date}</p>
      <p>Timing: {timing}</p>
    </div>
  );
};

export default TextDisplay;
