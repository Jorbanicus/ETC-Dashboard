import React from 'react';
import Watch from './Watch';
import path from 'path';

const WatchContainer = () => {
  const baseDir = path.join('E:', 'jorbanicus');
  const etcData = [
    { title: 'ETC 1', description: 'Plant 1 Cargo Lift', filePath: path.join(baseDir, 'test1.txt') },
    { title: 'ETC 2', description: 'Plant 1 Cargo Lift', filePath: path.join(baseDir, 'test2.txt') },
    { title: 'ETC 3', description: 'Cleaning Bay', filePath: path.join(baseDir, 'test3.txt') },
    { title: 'ETC 4', description: 'T56', filePath: path.join(baseDir, 'test4.txt') },
    { title: 'ETC 5', description: 'Plant 2', filePath: path.join(baseDir, 'test5.txt') },
    { title: 'ETC 6', description: 'Plant 2', filePath: path.join(baseDir, 'test6.txt') },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', padding: '20px', margin: '0 auto'}}>
      {etcData.map((item, index) => (
        <Watch key={index} title={item.title} description={item.description} filePath={item.filePath} />
      ))}
    </div>
  );
};

export default WatchContainer;
