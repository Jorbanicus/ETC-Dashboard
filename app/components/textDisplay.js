"use client";

import React, { useEffect, useState } from 'react';

function TextDisplay () {
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
      <p>{date}</p>
    </div>
  );
};

export default TextDisplay;
