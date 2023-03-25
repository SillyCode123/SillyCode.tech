'use strict';

//express things
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
app.use("/.netlify/functions/api", router);

//other vars
const indexHtml = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SillyCodeAPI</title></head><body><a href="https://sillycode.tech" style="color: #0086f5" class=".zoom">Click here to go to our Main Page</a> <style> body{--color-darkgrey: #1f1e1e;--color-white: #ffffff;--font: "Red_Hat_Mono", monospace;font-family: "Red_Hat_Mono", monospace;font-weight: 400;font-style: normal;font-size: calc(1rem + 0.4vw);line-height: 3ch;color: var(--color-white);background-color: var(--color-darkgrey);text-align: center;} a {text-decoration: none;}</style></body></html>';


//routes
router.get('/', (req, res) => { 
  res.write(indexHtml);
  res.end();
});


module.exports.handler = serverless(app);
