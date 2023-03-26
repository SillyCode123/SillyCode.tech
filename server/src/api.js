'use strict'
//import
const express = require('express');
const serverless = require('serverless-http');
require('dotenv').config();
const mysql = require("mysql");

//Express
const app = express();
const router = express.Router();


//other vars
const indexHtml = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SillyCodeAPI</title></head><body><a href="https://sillycode.tech" style="color: #0086f5" class=".zoom">Click here to go to our Main Page</a> <style> body{--color-darkgrey: #1f1e1e;--color-white: #ffffff;--font: "Red_Hat_Mono", monospace;font-family: "Red_Hat_Mono", monospace;font-weight: 400;font-style: normal;font-size: calc(1rem + 0.4vw);line-height: 3ch;color: var(--color-white);background-color: var(--color-darkgrey);text-align: center;} a {text-decoration: none;}</style></body></html>';
const connection = mysql.createConnection({
  host    : process.env.DB_HOST,
  user    : process.env.DB_USER,
  port    : '3306',
  password: process.env.DB_PSW,
  database: "mariadbdb",
});


//express settings
app.use("/.netlify/functions/api/", router);
//express 404
app.use((req, res, next) => {
  res.status(404).send(indexHtml)
})

//express err
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(indexHtml);
})


//Routes
router.get("/test", (req,res) => {
  try {
    res.write(executeQuery("Select * from SillyCodeTech.DiscordLoginCookies;") + "");
  } catch (error) {
    res.write(error);
    console.error(error);
  }
  res.end();
});

function executeQuery(cmd) {
  connection.query(
    cmd,
    function(err, results, fields) {
      console.log(err);
      console.log("RES:" + results); // results contains rows returned by server
      console.log("F:" + fields); // fields contains extra meta data about results, if available
      return results;
    }
  );
}

module.exports.handler = serverless(app);
