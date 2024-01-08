const readLastLines = require('read-last-lines');
const express = require('express');
const cors = require('cors');
const app = express();
const url = require('url');

app.use(cors());

let filePath;
let latestLine;
let isUpdating = false;
let fileCounter = 0; 
let roundCounter = 1; 

async function readLastLine() {
  isUpdating = true;
  let lastLine;
  try {
    lastLine = await readLastLines.read(filePath, 1);
  } catch (err) {
    console.error(err);
  }
  isUpdating = false;
  return lastLine;
}

app.get('/', async (req, res) => {
  const queryObject = url.parse(req.url,true).query;
  filePath = queryObject.filePath;

  if (filePath) {
    while (isUpdating) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    readLastLine()
      .then((lastLine) => {
        latestLine = lastLine;
        fileCounter++;
        if (fileCounter === 6) {
          console.log(`====== Ping ${roundCounter} ======\n`);
          fileCounter = 0;
          roundCounter++;
        }
        res.send(latestLine);
      })
      .catch((err) => {
        res.status(500).send('Error reading last line');
      });
  } else {
    res.send('No file path provided');
  }
});
const port = process.env.PORT || 3001; 

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});