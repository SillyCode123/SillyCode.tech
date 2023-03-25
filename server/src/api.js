'use strict';

//express things
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();


//other vars
const indexHtml = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SillyCodeAPI</title></head><body><a href="https://sillycode.tech" style="color: #0086f5" class=".zoom">Click here to go to our Main Page</a> <style> body{--color-darkgrey: #1f1e1e;--color-white: #ffffff;--font: "Red_Hat_Mono", monospace;font-family: "Red_Hat_Mono", monospace;font-weight: 400;font-style: normal;font-size: calc(1rem + 0.4vw);line-height: 3ch;color: var(--color-white);background-color: var(--color-darkgrey);text-align: center;} a {text-decoration: none;}</style></body></html>';
const DB = require("./DB")

//express settings
app.use("/.netlify/functions/api/", router);
//express 404
app.use((req, res, next) => {
  res.status(404).send(indexHtml)
})

//express err
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(indexHtml)
})

//create cookie
router.post("/create/cookie",(req,res) => {
  //try{
    if(getDBAcces(req.headers.authorization.split(" ")[1],3)){
      var i = 1;
      var cokie = makeRAND(i);
      while(!DB.existInTable(cokie) && i >= 16777215){
        cokie = makeRAND(i)
        i++;
      }

      if(!DB.existInTable(cokie)){
        DB.insertInTable("SillyCodeTech","DiscordLoginCookies",cokie)
        res.write(cokie);
      } else {
        alert("no cookies avaible more.")
      }

    }
  //} catch (error) { res.write("failed because ", error.toString());}
  res.write("");
  res.end();
});

//check cokie
router.post("/check/cookie",(req,res) => {
  console.warn(req.headers.authorization);
  try {
    if(getDBAcces(req.headers.authorization.trim().split(" ")[1],3)){
      console.info(req.query);
      con.connect((err) =>{
        if (err) res.write("couldn't create cookie because" + err);
  
        con.query("USE SillyCodeTech;", function (err, result) {
          if (err) res.write("couldn't create cookie because " + err);
        });
  
        con.query("SELECT EXISTS (SELECT key FROM SillyCodeTech.DiscordLoginCookies WHERE key = " +  + ") as OUTPUT;", function (err, result) {
          if (err) res.write("couldn't create cookie because " + err);
          res.write(result != 0) 
        });
  
      });
    }
  } catch (error) {
    res.write("failed");
  }
  res.write("");
  res.end();
});

//test
router.post("/test",(req,res) => {
  res.write("hah");
  res.write(DB.getTable("SillyCodeTech","DiscordLoginCookies",1)[0]);
  res.end();
});


//       boolean   string,int
function getDBAcces(token,colum) {
  if(DB.existInTable("General","DBAccessTokens",1,token)){
    var table = getTable("General","DBAccessTokens",2);
    if (table[colum] != null) return true;
  } 
  return false;
}

function makeRAND(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}


module.exports.handler = serverless(app);
