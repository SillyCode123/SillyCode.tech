// express vars
const express = require('express');
const app = express();
const port = 2425;
const path = "api/"

//database var
app.get('/hello', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`SillyCode.tech Api listen on port ${port}.`)
});
