import fs from 'fs';
import path from 'path';

let counter = 0;

const generateRandomText = () => {
    return new Promise((resolve, reject) => {
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const year = date.getFullYear().toString().slice(-2);

        const formattedDate = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
        console.log(formattedDate); // Log the newly generated text
        resolve(formattedDate);
    });
};

setInterval(async () => {
    const filePath = path.join(process.cwd(), 'public', 'test.txt');
    const newValue = await generateRandomText(); // Use generateRandomText to generate the new value
    fs.appendFile(filePath, `${newValue}\n`, 'utf8', (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('Successfully wrote to file');
        }
    });
    counter++;
}, 10000); // 10000 ms = 10 seconds