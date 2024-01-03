const express = require('express');
const fs = require('fs');
const readLastLines = require('read-last-lines');
const events = require('events');
const app = express();
const port = 3001;
const path = require('path');
const filePath = path.join('E:', 'jorbanicus', 'Werk6.0 - ETC Machine Dashboard', 'mingde2', 'public', 'test.txt');
const cors = require('cors');
const eventEmitter = new events.EventEmitter(); // Define eventEmitter

let latestLine = '';

function appendToFile() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}.${date.getMilliseconds().toString().padStart(6, '0')}`;

    try {
        fs.appendFileSync(filePath, `${formattedDate}\n`, 'utf8');
        console.log('Successfully wrote to file:', formattedDate);
        eventEmitter.emit('fileUpdated'); // Emit event after writing to the file
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

setInterval(appendToFile, 5000);

eventEmitter.on('fileUpdated', () => { // Listen for the event
  readLastLines.read(filePath, 1)
    .then((lines) => {
      console.log('Last line:', lines);
      if (!lines) {
        console.log('The last line read from the file is empty.');
      } else {
        latestLine = lines; // Store the latest line
      }
    })
    .catch((err) => {
      console.error('Error reading file:', err);
    });
});

app.use(cors());

app.get('/', (req, res) => {
  res.send(latestLine); // Send the latest line
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});