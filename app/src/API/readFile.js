const fs = require('fs');
const readLastLines = require('read-last-lines');
const express = require('express');
const cors = require('cors');
const app = express();
const url = require('url');
const events = require('events');

const path = require('path');

app.use(cors());

let filePath;
let latestLine;
let isUpdating = false;
let fileCounter = 0; // Add this line at the top of your script
let roundCounter = 1; // Add this line at the top of your script

function appendToFile() {
  return new Promise(async (resolve, reject) => {
    if (isUpdating) {
      reject(new Error('Update in progress'));
      return;
    }

    isUpdating = true;

    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}.${date.getMilliseconds().toString().padStart(6, '0')}`;

    fs.appendFile(filePath, `${formattedDate}\n`, 'utf8', async (err) => {
      if (err) {
        console.error('Error writing file:', err);
        isUpdating = false;
        reject(err);
      } else {
        console.log(`Successfully wrote to file ${path.basename(filePath)}: ${formattedDate}`);

        try {
          const lines = await readLastLines.read(filePath, 1);
          console.log(`Last line: ${path.basename(filePath)}: ${lines}`);
          if (!lines) {
            console.log('The last line read from the file is empty.');
          } else {
            latestLine = lines;
          }
          resolve(formattedDate);
        } catch (err) {
          console.error('Error reading last line:', err);
          reject(err);
        } finally {
          isUpdating = false;
        }
      }
    });
  });
}

app.get('/', async (req, res) => {
  const queryObject = url.parse(req.url,true).query;
  filePath = queryObject.filePath;

  if (filePath) {
    while (isUpdating) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    appendToFile()
      .then((newLine) => {
        fileCounter++;
        if (fileCounter === 6) {
          console.log(`====== Round ${roundCounter} of Test Done ======\n`);
          fileCounter = 0;
          roundCounter++;
        }
        res.send(latestLine);
      })
      .catch((err) => {
        res.status(500).send('Error updating file');
      });
  } else {
    res.send('No file path provided');
  }

  // ...
});
const port = process.env.PORT || 3001; 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});