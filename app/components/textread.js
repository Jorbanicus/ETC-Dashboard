import React, { useState, useEffect } from 'react';
import MyText from './test.txt';

const RenderText = ({ setTiming }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MyText);
        const data = await response.text();
        const timingInfo = parseTimingInfo(data);
        setTiming(timingInfo); // Use the prop directly
      } catch (error) {
        console.error('Error fetching text:', error);
      }
    };

    fetchData();
  }, [setTiming]);
};

export default RenderText;
