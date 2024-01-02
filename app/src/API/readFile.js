const express = require('express');
const fs = require('fs');
const readLastLines = require('read-last-lines');
const app = express();
const port = 3001;
const path = require('path');
const filePath = path.join('E:', 'jorbanicus', 'Werk6.0 - ETC Machine Dashboard', 'mingde', 'public', 'test.txt');

function appendToFile() {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}.${date.getMilliseconds().toString().padStart(6, '0')}`;

    try {
        fs.appendFileSync(filePath, `${formattedDate}\n`, 'utf8');
        console.log('Successfully wrote to file:', formattedDate);
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

setInterval(appendToFile, 5000);

app.get('/', (req, res) => {
    readLastLines.read(filePath, 1)
      .then((lines) => {
        if (!lines) {
          console.log('The last line read from the file is empty.');
        } else {
          res.send(lines);
        }
      })
      .catch((err) => {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
      });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });