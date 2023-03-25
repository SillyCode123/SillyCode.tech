'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();

const router = express.Router();


//ist wichtig
app.use("/.netlify/functions/api", router);

//routes
router.get('/', (req, res) => {
  res.sendFile("index.html")
  res.end();
});


module.exports.handler = serverless(app);
