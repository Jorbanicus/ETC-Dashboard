const fs = require('fs');
const path = require('path');

const filePath = 'C:/Users/SMART MRO/Desktop/jorbanicus/Werk6.0 - ETC Machine Dashboard/mingde/public/test.txt';

const generateRandomText = () => {
  const currentDate = new Date();
  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const year = currentDate.getFullYear().toString().slice(-2);

  const formattedText = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;

  // Append the content to a .txt file
  fs.appendFileSync(filePath, formattedText + '\n', 'utf-8');

  // console.log(formattedText);
};

// Initial call
generateRandomText();

// Set up interval to generate random text every 1 minute
const intervalId = setInterval(() => {
  generateRandomText();
}, 60000); // 60000 milliseconds = 1 minute

// Stop the interval after a few iterations (for testing purposes)
setTimeout(() => {
  clearInterval(intervalId);
}, 300000); // Stop after 5 minutes (300,000 milliseconds)

module.exports = generateRandomText;
