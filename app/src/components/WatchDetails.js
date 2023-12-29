import React from 'react';
import Watch from './Watch';

const WatchContainer = () => {
  const etcData = [
    { title: 'ETC 1', description: 'Plant 1 Cargo Lift' },
    { title: 'ETC 2', description: 'Plant 1 Cargo Lift' },
    { title: 'ETC 3', description: 'Cleaning Bay' },
    { title: 'ETC 4', description: 'T56' },
    { title: 'ETC 5', description: 'Plant 2' },
    { title: 'ETC 6', description: 'Plant 2' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', margin: '0 auto'}}>
      {etcData.map((item, index) => (
        <Watch key={index} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default WatchContainer;
